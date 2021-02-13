import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Graph from "./Components/Graph";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import EcoIcon from "@material-ui/icons/Eco";
import landing from "../images/landing.jpg";
import budgetTracker from "../images/budget-tracker.png";

const styles = {
  box: {
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
    padding: "16px 5px",
    marginBottom: "100px",
  },
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

  // const data = [
  //   { month: "J", income: 1500, expense: 1200 },
  //   { month: "F", income: 2200, expense: 500 },
  //   { month: "M", income: 1000, expense: 700 },
  //   { month: "A", income: 800, expense: 1600 },
  //   { month: "M", income: 2000, expense: 1500 },
  //   { month: "J", income: 3200, expense: 1200 },
  //   { month: "J", income: 2000, expense: 1000 },
  //   { month: "A", income: 2200, expense: 800 },
  //   { month: "S", income: 2000, expense: 900 },
  //   { month: "O", income: 2500, expense: 800 },
  //   { month: "N", income: 2600, expense: 700 },
  //   { month: "D", income: 2700, expense: 700 },
  // ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Nav />
      <Box style={{ ...styles.box, height: isMobile ? "75vh" : "500px" }}>
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
      </Box>

      {/* <Box
        style={{
          width: "100%",
          margin: "50px auto",
        }}
      >
        <Card styles={styles.card}>
          <Grid container>
            <Grid container md={4} alignItems='center' justify='center'>
              <Typography variant={!isMobile ? "h4" : "h5"} align='center'>
                Track income and expenses
              </Typography>
            </Grid>
            <Grid
              container
              md={8}
              alignItems='center'
              justify='center'
              style={{ height: "400px" }}
            >
              <img src={budgetTracker} height='100%' />
            </Grid>
          </Grid>
        </Card>

        <Card style={styles.card}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Graph
                data={data}
                key1='income'
                key2='expense'
                width={isMobile ? width * 0.9 : width * 0.6}
                height={height * 0.25}
                grid
                style={{
                  backgroundColor: "#F5FFFA",
                  padding: "16px",
                }}
              />
            </Grid>
            <Grid container xs={12} md={4} alignItems='center' justify='center'>
              <Typography variant={!isMobile ? "h4" : "h5"} align='center'>
                Track income and expenses
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box> */}
    </>
  );
};
