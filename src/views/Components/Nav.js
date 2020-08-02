import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, IconButton, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { UserContext } from '../../UserContext'
import InitAuth from './Auth/InitAuth'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(5)
    }
}))

export default () => {

    const { user, setUser } = useContext(UserContext)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const classes = useStyles()

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        window.location.href = '/'
    }

    const renderButtons = !user ?
        [
            <Button color="inherit" onClick={() => { setShowLogin(true) }} key={'login'}>Login</Button>,
            <Button color="inherit" onClick={() => { setShowRegister(true) }} key={'register'}>Register</Button>
        ]
        :
        [
            <Button color="inherit" component={NavLink} to='/dashboard' key={'dashboard'}>Dashboard</Button>,
            <Button color="inherit" onClick={handleLogout} key={'logout'}>Logout</Button>
        ]

    return (
        <>
            <InitAuth />
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Grid container spacing={1} justify='space-between' alignItems='center'>
                        <Grid item xs={8}>
                            <IconButton onClick={() => window.open('https://github.com/bmai53/budget-tracker', "_blank")}>
                                <GitHubIcon fontSize='large' color='secondary'/>
                            </IconButton>
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