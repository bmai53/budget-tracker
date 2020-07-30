import React, { useState } from 'react'
import axios from 'axios'

export default () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (event) => {
        event.preventDefault()

        if (password === confirmPassword) {
            axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/register', {
                email: email,
                password: password
            })
                .then((response) => {
                    console.log(response)
                })
        }
        else {
            alert('Password does not match')
        }
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <input
                    type='password'
                    name='password'
                    value={confirmPassword}
                    onChange={(event) => { setConfirmPassword(event.target.value) }}
                />

                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}
