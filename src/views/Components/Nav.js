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
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { UserContext } from "../../UserContext";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";

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
                <Tooltip title='Github Repo'>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://github.com/bmai53/budget-tracker",
                        "_blank"
                      )
                    }
                  >
                    <GitHubIcon fontSize='large' color='secondary' />
                  </IconButton>
                </Tooltip>
                <Button
                  style={{ textTransform: "none" }}
                  color='inherit'
                  component={NavLink}
                  to='/home'
                >
                  <Typography variant='h4'>Budget Tracker</Typography>
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
