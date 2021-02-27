import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import { Box, Card, Divider, Grid, Typography } from "@material-ui/core";
import { LineChart } from "./Components/Graphs";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import EcoIcon from "@material-ui/icons/Eco";
import landing from "../images/landing.jpg";
import budgetTracker from "../images/budget-tracker.png";

const styles = {
  banner: {
    width: "100%",
    backgroundImage: `url(${landing})`,
    backgroundSize: "cover",
  },

  flexBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  card: {
    raised: true,
    padding: "16px 5px",
    marginBottom: "100px",
  },

  divider: {
    margin: "50px 0",
  },
};

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 1700, 900, 700, 500, 600],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Income",
      data: [500, 600, 1100, 1800, 1500, 1400],
      fill: false,
      backgroundColor: "rgb(99, 255, 132)",
      borderColor: "rgba(99, 255, 132, 0.2)",
    },
  ],
};

export default () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const { innerWidth, innerHeight } = window;
  //     setWidth(innerWidth);
  //     setHeight(innerHeight);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Nav />
      <Card style={{ ...styles.banner }}>
        <div
          style={{ ...styles.flexBox, height: isMobile ? "250px" : "500px" }}
        >
          <Typography
            variant={!isMobile ? "h1" : "h5"}
            align='center'
            color='secondary'
            gutterBottom
          >
            Welcome to Budget Tracker
            <EcoIcon fontSize='inherit' color='secondary' />
          </Typography>
          <Typography
            variant={!isMobile ? "h3" : "subtitle1"}
            align='center'
            color='secondary'
          >
            Login or sign up to get started!
          </Typography>
        </div>
      </Card>

      <Box
        style={{
          width: isMobile ? "100%" : "80%",
          margin: "50px auto",
        }}
      >
        <Grid container>
          <Grid
            container
            xs={12}
            md={4}
            alignItems='center'
            justify='flex-start'
          >
            <Typography
              gutterBottom
              variant={!isMobile ? "h4" : "h5"}
              align='center'
            >
              Track daily income and expenses
            </Typography>
          </Grid>
          <Grid container xs={12} md={8} alignItems='center' justify='flex-end'>
            <Card raised styles={styles.card}>
              <img src={budgetTracker} height='500px' />
            </Card>
          </Grid>
        </Grid>

        <Divider variant='middle' style={styles.divider} />

        <Grid container>
          <Grid item xs={12} md={8}>
            <Card style={styles.card}>
              <LineChart data={chartData} />
            </Card>
          </Grid>
          <Grid container xs={12} md={4} alignItems='center' justify='center'>
            <Typography variant={!isMobile ? "h4" : "h5"} align='center'>
              Visualize trends over time
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
