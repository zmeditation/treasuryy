import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    backgroundColor: "transparent",
    borderBottom: "1px solid #161522",
    padding: "0px 16px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      textAlign: "center",
      height: "fit-content",
      padding: "20px 0px",
      width: "100%",
    },
  },
  logoContent: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px",
    },
  },
  logo: {
    width: "200px",
    height: "50px",
  },
  connectContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  connectWalletBtn: {
    textAlign: "center",
    background: "linear-gradient(rgb(165, 127, 57), rgb(238, 206, 111))",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    letterSpacing: "0.03em",
    padding: "0 16px ",
    height: "32px",
    textTransform: "capitalize",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      background: "#9a6aff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Link to="/" className={classes.logoContent}>
        <img
          src={require("../assets/images/logo.png")}
          alt="logo"
          className={classes.logo}
        ></img>
      </Link>
      <div className={classes.connectContent}>
        <button className={classes.connectWalletBtn}>Connect Wallet</button>
      </div>
    </Box>
  );
};

export default Header;
