import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={setEmail(event.target.value)}
                />

                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={setPassword(event.target.value)}
                />

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
