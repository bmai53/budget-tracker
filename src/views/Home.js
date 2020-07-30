import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

export default () => {
    return (
        <>
            <h1>Homepage</h1>
            <Login />
            <Register />
        </>
    )
}
