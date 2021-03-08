import React from "react";
import { Box, Typography, Grid, CircularProgress } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  splash: {
    margin: "25vh 0",
    width: "100wh",
    height: "25vh",
    lineHeight: "25vh",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "250px",
    },
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box align='center' className={classes.splash}>
      <Typography variant={isMobile ? "h4" : "h1"} color='primary'>
        Budget Tracker
        <EcoIcon fontSize='inherit' color='primary' />
      </Typography>

      <CircularProgress size={isMobile ? 100 : 200} color='primary' />
    </Box>
  );
};
