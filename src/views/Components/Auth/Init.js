import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../../UserContext'

// check if token exists
export default () => {
    const {user, setUser} = useContext(UserContext)

    useEffect( () => {
        const token = localStorage.getItem('token')
        if(!user && token){
            axios.get(process.env.REACT_APP_BACKEND_URL + 'auth/findUser', {
                headers: { Authorization: `JWT ${token}` }
            }).then(response => {
                setUser(response.data.auth);
            })
        } 
    }, [user, setUser])

    return(
        <>
        </>
    )
}