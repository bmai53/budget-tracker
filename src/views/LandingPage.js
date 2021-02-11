import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import { Typography } from "@material-ui/core";
import landing from "../images/landing.jpg";

const styles = {
  box: {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${landing})`,
    backgroundSize: "cover",
  },

  boxMobile: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${landing})`,
    backgroundSize: "cover",
  },

  text: {
    color: "#FFF",
  },
};

export default () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setWidth(innerWidth);
      setHeight(innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <>
      <Nav />
      {width > 480 ? (
        <div style={styles.box}>
          <div>
            <Typography
              variant='h1'
              align='center'
              style={{ ...styles.text, paddingTop: "200px" }}
            >
              Welcome to Budget Tracker
            </Typography>
            <Typography variant='h3' align='center' style={styles.text}>
              Login or sign up to start!
            </Typography>
          </div>
        </div>
      ) : (
        <div style={styles.box}>
          <Typography
            variant='h2'
            align='center'
            style={{ ...styles.text, paddingTop: "100px" }}
          >
            Budget Tracker
          </Typography>
        </div>
      )}
    </>
  );
};
