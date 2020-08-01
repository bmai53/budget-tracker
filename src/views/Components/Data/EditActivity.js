import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton, TextField, MenuItem } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    deleteButton: {
        color: 'red'
    }
}))

export default ({ open, onClose, data, categoriesList }) => {
    console.log(data)
    const [name, setName] = useState(data.name)
    const [amount, setAmount] = useState(data.amount)
    const [date, setDate] = useState(moment(data.date).format('YYYY-MM-DD'))
    const [categoryId, setCategoryId] = useState(data.category_id)
    const [type, setType] = useState(data.type)

    console.log('data', data.date)
    console.log(date)
    const token = localStorage.getItem('token')
    const handleSubmit = useCallback(() => {
        console.log(token)
        axios.put(process.env.REACT_APP_BACKEND_URL + 'activity/updateActivity', {
            id: data.id,
            updateData: {
                name: name,
                amount: amount,
                date: date,
                category_id: categoryId,
                type: type
            }
        }, {
            headers: {
                Authorization: `JWT ${token}`
            },
        })
            .then(() => {
                onClose()
                window.location.reload()
            })
    },[name, amount, date, categoryId, type, token, data.id, onClose])

    const handleDelete = () => {
        axios.delete(process.env.REACT_APP_BACKEND_URL + 'activity/deleteActivity', {
            data: {
                id: data.id
            },
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(() => {
                onClose()
                window.location.reload()
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

    }, [handleSubmit, open])

    const classes = useStyles()
    return (
        <Dialog open={open ? open : false} onClose={onClose}>
            <DialogTitle>
                Edit Activities
                <IconButton onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <CancelIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus label='Name' type='text' fullWidth value={name} onChange={(event) => { setName(event.target.value) }} />
                <TextField label='Amount' type='number' fullWidth value={amount} onChange={(event) => { setAmount(event.target.value) }} />
                <TextField label='Date' type='date' fullWidth value={date} InputLabelProps={{ shrink: true }} onChange={event => setDate(event.target.value)} />
                <TextField label='Category' type='number' fullWidth value={categoryId} select onChange={event => setCategoryId(event.target.value)}>
                    {categoriesList.map(c => <MenuItem value={c.id} key={c.id}>{c.name}</MenuItem>)}
                </TextField>
                <TextField label='Type' fullWidth value={type} select onChange={event => setType(event.target.value)}>
                    <MenuItem value={'expense'}>Expense</MenuItem>
                    <MenuItem value={'income'}>Income</MenuItem>
                </TextField>
                <DialogActions>
                    <Button onClick={handleDelete} className={classes.deleteButton}>Delete</Button>
                    <Button onClick={handleSubmit} color='primary'>Update</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}
