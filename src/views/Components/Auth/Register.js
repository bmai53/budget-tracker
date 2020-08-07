import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import theme from '../../../theme'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default ({ open, onClose }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // snackbars
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(false)


    const handleRegister = useCallback(() => {
        if (password === confirmPassword) {
            axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/register', {
                email: email,
                password: password
            })
                .then((response) => {
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    setShowSuccess(true)
                    onClose()
                })
                .catch((error) => {
                    if (error.response) {
                        error.response.status === 409 ? setShowEmailError(true) : setShowError(true)
                    }
                })
        }
        else {
            setShowPasswordError(true)
        }
    }, [email, password, confirmPassword, onClose])

    // Add event listener that will check for enter presses and preform action if so
    useEffect(() => {
        const enterPressListener = (e) => {
            if ((e.code === "Enter" || e.code === "NumpadEnter") && open) {
                handleRegister();
            }
        }
        document.addEventListener("keydown", enterPressListener);
        return () => {
            document.removeEventListener("keydown", enterPressListener);
        }
    }, [open, handleRegister])

    return (
        <>
            <Dialog open={open ? open : false} onClose={onClose}>
                <DialogTitle style={{ backgroundColor: theme.palette.primary.main, color: "white" }}>
                    Register
                <IconButton color="secondary" onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
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

            <Snackbar open={showSuccess} autoHideDuration={3000} onClose={() => { setShowSuccess(false) }}>
                <Alert onClose={() => { setShowSuccess(false) }} severity="success">
                    Account created!
                </Alert>
            </Snackbar>
            <Snackbar open={showError} autoHideDuration={3000} onClose={() => { setShowError(false) }}>
                <Alert onClose={() => { setShowError(false) }} severity="error">
                    Registration error
                </Alert>
            </Snackbar>
            <Snackbar open={showEmailError} autoHideDuration={3000} onClose={() => { setShowEmailError(false) }}>
                <Alert onClose={() => { setShowEmailError(false) }} severity="info">
                    Email already registered
                </Alert>
            </Snackbar>
            <Snackbar open={showPasswordError} autoHideDuration={3000} onClose={() => { setShowPasswordError(false) }}>
                <Alert onClose={() => { setShowPasswordError(false) }} severity="info">
                    Password does not match
                </Alert>
            </Snackbar>
        </>
    )
}