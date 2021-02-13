import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Typography,
  Collapse,
  Card,
  List,
  ListItem,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { UserContext } from "../../UserContext";
import EcoIcon from "@material-ui/icons/Eco";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  menu: {
    marginTop: -theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
  },
  menuCard: {
    backgroundColor: theme.palette.primary.main,
  },
  menuList: {
    float: "right",
  },
  menuListButton: {
    color: "white",
  },
}));

export default () => {
  const { user, setUser } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    window.location.href =
      process.env.ENV === "DEV" ? "/home" : "/budget-tracker/";
  };

  const renderButtons = !user
    ? [
        <Button
          color='inherit'
          onClick={() =>
            window.open("https://github.com/bmai53/budget-tracker", "_blank")
          }
          key={"github"}
        >
          GitHub Repo
        </Button>,
        <Button
          color='inherit'
          onClick={() => {
            setShowLogin(true);
          }}
          key={"login"}
        >
          Login
        </Button>,
        <Button
          color='inherit'
          onClick={() => {
            setShowRegister(true);
          }}
          key={"register"}
        >
          Register
        </Button>,
      ]
    : [
        <Button
          color='inherit'
          onClick={() =>
            window.open("https://github.com/bmai53/budget-tracker", "_blank")
          }
          key={"github"}
        >
          GitHub Repo
        </Button>,
        <Button
          color='inherit'
          component={NavLink}
          to='/dashboard'
          key={"dashboard"}
        >
          Dashboard
        </Button>,
        <Button color='inherit' onClick={handleLogout} key={"logout"}>
          Logout
        </Button>,
      ];

  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid
            container
            spacing={1}
            justify='space-between'
            alignItems='center'
          >
            <Grid item xs={8}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                <Button
                  style={{ textTransform: "none" }}
                  color='inherit'
                  component={NavLink}
                  to='/home'
                >
                  <Typography variant={isMobile ? "h6" : "h4"}>
                    Budget Tracker
                    <EcoIcon fontSize='inherit' color='secondary' />
                  </Typography>
                </Button>
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                {renderButtons}
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <IconButton onClick={() => setShowMenu(!showMenu)}>
                  <MenuIcon fontSize='large' color='secondary' />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      {showMenu && (
        <Collapse in={showMenu} className={classes.menu}>
          <Card className={classes.menuCard}>
            <List className={classes.menuList}>
              {renderButtons.map((b) => (
                <ListItem className={classes.menuListButton}>{b}</ListItem>
              ))}
            </List>
          </Card>
        </Collapse>
      )}
      <Login open={showLogin} onClose={() => setShowLogin(false)} />
      <Register open={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};
