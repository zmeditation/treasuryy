import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/logo.png'
import { networkInfo, connectButton, connectWalletStatus } from 'constant/config'
import { dec2hexString } from 'constant/util'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #161522',
    padding: '0px 16px',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      textAlign: 'center',
      height: 'fit-content',
      padding: '20px 0px',
      width: '100%',
    },
  },
  logoContent: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0px',
    },
  },
  logo: {
    width: '200px',
    height: '50px',
  },
  connectContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectWalletBtn: {
    textAlign: 'center',
    background: 'linear-gradient(rgb(165, 127, 57), rgb(238, 206, 111))',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '10px',
    letterSpacing: '0.03em',
    padding: '0 16px ',
    height: '32px',
    textTransform: 'capitalize',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      background: '#9a6aff',
    },
  },
}))

declare global {
  interface Window {
    ethereum: any
  }
}

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const userDisconnected = useSelector((state: any) => state.userDisconnected)

  let connectStatus = localStorage.getItem('TreasuryyConnectStatus')
  // let [userDisconnected, setUserDisconnected] = useState(connectStatus)

  if (connectStatus === null) {
    dispatch({ type: 'SET_USERDISCONNECTED', payload: connectWalletStatus.disconnect })
    // setUserDisconnected(connectWalletStatus.disconnect)
    localStorage.setItem('TreasuryyConnectStatus', connectWalletStatus.disconnect)
  }

  const connectWallet = async () => {
    window.ethereum.autoRefreshOnNetworkChange = false
    try {
      await window.ethereum.enable() //connect wallet
      dispatch({ type: 'SET_USERDISCONNECTED', payload: connectWalletStatus.connect })
      // setUserDisconnected(connectWalletStatus.connect)
      localStorage.setItem('TreasuryyConnectStatus', connectWalletStatus.connect)
    } catch (error) {
      console.log('Ethereum console not open yet')
    }
  }

  const switchNetwork = () => {
    let chainId = dec2hexString(networkInfo.chain_id)

    window.ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `${chainId}` }],
      })
      .catch((error: any) => {
        if (!error.code) {
          connectWallet()
        } else if (error.code === 4902) {
          alert('Please add network')
        } else {
          console.log('other network')
        }
      })
  }

  const handleWallet = async () => {
    if (userDisconnected === connectWalletStatus.disconnect) {
      if (window.ethereum) {
        if (parseInt(window.ethereum.chainId) === networkInfo.chain_id) {
          connectWallet()
        } else {
          switchNetwork()
        }
      } else {
        console.log('wrong network')
      }
    } else {
      dispatch({ type: 'SET_USERDISCONNECTED', payload: connectWalletStatus.disconnect })
      // setUserDisconnected(connectWalletStatus.disconnect)
      localStorage.setItem('TreasuryyConnectStatus', connectWalletStatus.disconnect)
    }
  }

  useEffect(() => {
    window.ethereum.on('chainChanged', (chainId: any) => {
      window.ethereum.autoRefreshOnNetworkChange = false
      if (parseInt(chainId) !== networkInfo.chain_id) {
        dispatch({ type: 'SET_USERDISCONNECTED', payload: connectWalletStatus.disconnect })
        // setUserDisconnected(connectWalletStatus.disconnect)
        localStorage.setItem('TreasuryyConnectStatus', connectWalletStatus.disconnect)
      } else {
        if (userDisconnected) {
          dispatch({ type: 'SET_USERDISCONNECTED', payload: connectWalletStatus.connect })
          // setUserDisconnected(connectWalletStatus.connect)
          localStorage.setItem('TreasuryyConnectStatus', connectWalletStatus.connect)
        }
      }
      console.log('Chain Changed', chainId)
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.ethereum.chainId])

  return (
    <Box className={classes.header}>
      <Link to="/" className={classes.logoContent}>
        <img src={Logo} alt="logo" className={classes.logo}></img>
      </Link>
      <div className={classes.connectContent}>
        <button className={classes.connectWalletBtn} onClick={handleWallet}>
          {userDisconnected === connectWalletStatus.connect ? connectButton.disconnect : connectButton.connect}
        </button>
      </div>
    </Box>
  )
}

export default Header
