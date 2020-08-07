import React, { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import theme from '../../../theme'
import { UserContext } from '../../../UserContext'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default ({ open, onClose }) => {

    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // snackbars
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)


    const handleLogin = useCallback(() => {
        axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                setUser(response.data.auth)
                setShowSuccess(true)
                onClose()
            })
            .catch((error) => {
                setShowError(true)
            })
    }, [email, password, onClose, setUser])

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
        <>
            <Dialog open={open ? open : false} onClose={onClose}>
                <DialogTitle style={{ backgroundColor: theme.palette.primary.main, color: "white" }}>
                    Login
                <IconButton color="secondary" onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
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

            <Snackbar open={showSuccess} autoHideDuration={3000} onClose={() => { setShowSuccess(false) }}>
                <Alert onClose={() => { setShowSuccess(false) }} severity="success">
                    Login Success!
                </Alert>
            </Snackbar>
            <Snackbar open={showError} autoHideDuration={3000} onClose={() => { setShowError(false) }}>
                <Alert onClose={() => { setShowError(false) }} severity="error">
                    Invalid Credentials
                </Alert>
            </Snackbar>
        </>
    )
}
