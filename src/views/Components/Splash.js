import React from "react";
import { Box, Typography, Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  splash: {
    paddingTop: "25%",
    height: "100vh",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Box align='center' className={classes.splash}>
      <Typography variant='h1' align='center'>
        Budget Tracker
      </Typography>
      <CircularProgress size={100} color='primary' />
    </Box>
  );
};
