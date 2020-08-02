import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    positive: {
        color: theme.palette.positive.main
    },
    negative: {
        color: theme.palette.negative.main
    }
}))

export default ({ data }) => {
    let total = 0
    data.map(d => {
        d.type === 'income' ? total += parseFloat(d.amount) : total -= parseFloat(d.amount)
    })

    const classes = useStyles()
    return (
        <>
            <Typography variant='h3' display='inline'>
                Activities Total:&nbsp;
            </Typography>
            <Typography variant='h3' display='inline' className={total >= 0 ? classes.positive : classes.negative}>
                ${total.toFixed(2)}
            </Typography>
        </>
    )
}