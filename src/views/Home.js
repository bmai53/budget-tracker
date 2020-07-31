import React from 'react'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Nav from './Components/Nav'

export default () => {
    return (
        <>
            <Nav />
            <h1>Homepage</h1>
            <Login />
            <Register />
            
        </>
    )
}
