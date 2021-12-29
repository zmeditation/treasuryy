import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  CCardRoot: {
    backgroundColor: "#161522",
    padding: "32px",
    borderRadius: "10px",
  },
}));

interface CCardProps {
  children: React.ReactNode;
  className?: any;
}
const CCard = ({ children, className }: CCardProps) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.CCardRoot, { [className]: className })}>
      {children}
    </Box>
  );
};

export default CCard;
