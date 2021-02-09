import React, { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../UserContext";
import { Box, Typography, Grid, CircularProgress } from "@material-ui/core";

// check if token exists
export default () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!user && token) {
      axios
        .get(process.env.REACT_APP_BACKEND_URL + "auth/findUser", {
          headers: { Authorization: `JWT ${token}` },
        })
        .then((response) => {
          setUser(response.data.auth);
        });
    }
  }, [user, setUser]);

  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      justify='center'
      direction='column'
    >
      <Grid item>
        <Box align='center'>
          <Typography variant='h1' align='center'>
            Budget Tracker
          </Typography>
          <CircularProgress size={100} color='primary' />
        </Box>
      </Grid>
    </Grid>
  );
};
