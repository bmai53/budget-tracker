import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
        </>
    )
}