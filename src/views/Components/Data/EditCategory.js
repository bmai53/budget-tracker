import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField, MenuItem } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles(theme => ({
    deleteButton: {
        color: 'red'
    }
}))


export default ({ open, onClose, categoriesList, getCategories, getActivities }) => {
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const token = localStorage.getItem('token')
    const handleSubmit = useCallback(() => {
        axios.post(process.env.REACT_APP_BACKEND_URL + 'category/addCategory', {
            name: name
        }, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(() => {
                setName('')
                getCategories()
                onClose()
            })
    }, [name, onClose, token, getCategories])

    const handleDelete = () => {
        axios.delete(process.env.REACT_APP_BACKEND_URL + 'category/deleteCategory', {
            data: {
                id: categoryId
            },
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(() => {
                getCategories()
                getActivities()
                onClose()
            })
    }

    useEffect(() => {
        // Add event listener that will check for enter presses and preform action if so
        const enterPressListener = (e) => {
            if ((e.code === "Enter" || e.code === "NumpadEnter") && open) {
                handleSubmit();
            }
        };
        document.addEventListener("keydown", enterPressListener);

        return () => {
            document.removeEventListener("keydown", enterPressListener);
        };

    }, [open, handleSubmit])


    const classes = useStyles()
    return (
        <Dialog open={open ? open : false} onClose={onClose} fullWidth>
            <DialogTitle>
                Edit Categories
                <IconButton onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <CancelIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus label='Add New Category' type='text' fullWidth value={name} onChange={(event) => { setName(event.target.value) }} />
                <DialogActions>
                    <Button onClick={handleSubmit} color='primary'>Add</Button>
                </DialogActions>

                <TextField label='Delete Existing Category' fullWidth value={categoryId} select onChange={event => setCategoryId(event.target.value)}>
                    {categoriesList.map(c => <MenuItem value={c.id} key={c.id}>{c.name}</MenuItem>)}
                </TextField>
                <DialogActions>
                    <Button onClick={handleDelete} className={classes.deleteButton}>Delete</Button>
                </DialogActions>

            </DialogContent>
        </Dialog>
    )
}
