import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { UserContext } from '../../UserContext'
import InitAuth from './Auth/InitAuth'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))

export default () => {

    const { user, setUser } = useContext(UserContext)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        window.location.href = '/'
    }

    const renderButtons = !user ?
        [
            <Button color="inherit" className={classes.button} onClick={() => { setShowLogin(true) }} key={'login'}>Login</Button>,
            <Button color="inherit" className={classes.button} onClick={() => { setShowRegister(true) }} key={'register'}>Register</Button>
        ]
        :
        [
            <Button color="inherit" className={classes.button} onClick={handleLogout}>Logout</Button>
        ]
    return (
        <>
            <InitAuth />
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Grid container spacing={1} justify='space-between'>
                        <Grid item xs={8}>
                            <Button color="inherit" component={NavLink} to='/'>
                                Home
                        </Button>
                            <Button color="inherit" component={NavLink} to='/dashboard'>
                                Dashboard
                        </Button>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'right' }}>
                            {renderButtons}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Login open={showLogin} onClose={() => setShowLogin(false)} />
            <Register open={showRegister} onClose={() => setShowRegister(false)} />
        </>
    )
}