import React, { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { UserContext } from '../../../UserContext'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';

export default ({ open, onClose }) => {

    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = useCallback(() => {
        axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                onClose()
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                setUser(response.data.auth)
            })
            .catch((error) => {
                alert(error)
            })
    },[email, password, onClose, setUser])

    // Add event listener that will check for enter presses and preform action if so
    useEffect(() => {
        const enterPressListener = (e) => {
            if ((e.code === "Enter" || e.code === "NumpadEnter") && open) {
                handleLogin();
            }
        };
        document.addEventListener("keydown", enterPressListener);
        return () => {
            document.removeEventListener("keydown", enterPressListener);
        };
    }, [open, handleLogin])

    return (
        <Dialog open={open ? open : false} onClose={onClose}>
            <DialogTitle>
                Login
                <IconButton onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <CancelIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus label='Email' type='email' fullWidth value={email} onChange={(event) => { setEmail(event.target.value) }} />
                <TextField label='Password' type='password' fullWidth value={password} onChange={(event) => { setPassword(event.target.value) }} />
                <DialogActions>
                    <Button onClick={handleLogin} color='primary'>Login</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}
