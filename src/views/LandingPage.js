import React from 'react'
import Nav from './Components/Nav'
import { Typography } from '@material-ui/core'

export default () => {
    return (
        <>
            <Nav />
            <Typography variant='h1' align='center'>Welcome to Budget Tracker</Typography>
            <Typography variant='h3' align='center'>Log in or register to get started!</Typography>
            
        </>
    )
}
