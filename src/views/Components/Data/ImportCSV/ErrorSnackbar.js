import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

export default ({ open, onClose, message, severity }) => {

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
            <Alert onClose={onClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}