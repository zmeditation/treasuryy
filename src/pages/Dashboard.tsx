import React from "react";
import { Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CCard from "../components/basic/CCard";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "50px 24px",
  },
  initialCard: {
    margin: "20px 0px 40px 0px",
  },
  cardContent: {
    display: "flex",
    color: "#f4eeff",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  cardHeader: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "24px",
    minWidth: "160px",
    textAlign: "left",
  },
  withdrawBtn: {
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
    minWidth: "76px",
    "&:hover": {
      background: "#9a6aff",
    },
  },
  balanceText: {
    color: "#b8add2",
    fontSize: "20px",
  },
  valueText: {
    fontSize: "24px",
  },
  noneWithdraw: {
    width: "108px",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <CCard className={classes.initialCard}>
        <Box className={classes.cardContent}>
          <span className={classes.cardHeader}>Multisignature</span>
          <div>
            <div className={classes.balanceText}>Balance</div>
            <div className={classes.valueText}>1.01ETH</div>
          </div>
          <button className={classes.withdrawBtn}>Withdraw</button>
        </Box>
      </CCard>
      <CCard className={classes.initialCard}>
        <Box className={classes.cardContent}>
          <span className={classes.cardHeader}>Treasuryy</span>
          <div>
            <div className={classes.balanceText}>Balance</div>
            <div className={classes.valueText}>1.01ETH</div>
          </div>
          <button className={classes.withdrawBtn}>Withdraw</button>
        </Box>
      </CCard>
      <CCard className={classes.initialCard}>
        <Box className={classes.cardContent}>
          <span className={classes.cardHeader}>DIMcoin</span>
          <div>
            <div className={classes.balanceText}>Staking</div>
            <div className={classes.valueText}>1.01ETH</div>
          </div>
          <div className={classes.noneWithdraw}></div>
        </Box>
      </CCard>
    </Container>
  );
};

export default Dashboard;
