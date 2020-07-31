import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../../UserContext'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';

export default ({ open, onClose }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = () => {
        if (password === confirmPassword) {
            axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/register', {
                email: email,
                password: password
            })
                .then((response) => {
                    console.log(response)
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                })
        }
        else {
            alert('Password does not match')
        }
    }

    // Add event listener that will check for enter presses and preform action if so
    useEffect(() => {
        const enterPressListener = (e) => {
            if ((e.code === "Enter" || e.code === "NumpadEnter") && open) {
                handleRegister();
            }
        };
        document.addEventListener("keydown", enterPressListener);
        return () => {
            document.removeEventListener("keydown", enterPressListener);
        };
    }, [open, handleRegister])

    return (
        <Dialog open={open ? open : false} onClose={onClose}>
            <DialogTitle>
                Register
                <IconButton onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <CancelIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus label='Email' type='email' fullWidth value={email} onChange={(event) => { setEmail(event.target.value) }} />
                <TextField label='Password' type='password' fullWidth value={password} onChange={(event) => { setPassword(event.target.value) }} />
                <TextField label='Password' type='password' fullWidth value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                <DialogActions>
                    <Button onClick={handleRegister} color='primary'>Register</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}