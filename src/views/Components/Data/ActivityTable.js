import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, IconButton, Tooltip, CircularProgress } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import EditActivity from './EditActivity';

const useStyles = makeStyles(theme => ({
    table: {
        maxWidth: 1000,
    },
    tableHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    income: {
        color: theme.palette.positive.main
    },
    expense: {
        color: theme.palette.negative.main
    }
}))

export default ({ activitiesList, categoriesList, getActivities, loading }) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [showEditActivity, setShowEditActivity] = useState(false)
    const [editRow, setEditRow] = useState() // store data of row to edit

    useEffect(() => {
        setData(activitiesList)
    }, [activitiesList])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }


    const classes = useStyles()
    const rows = data.map(row => (
        <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{moment(row.date).format('MMMM D, YYYY')}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="right">{row.category_name}</TableCell>
            <TableCell align="right" className={row.type === 'income' ? classes.income : classes.expense} >
                {row.type.charAt(0).toUpperCase() + row.type.slice(1)}
            </TableCell>
            <TableCell>
                <Tooltip title='Edit'>
                    <IconButton onClick={() => {
                        setShowEditActivity(true)
                        setEditRow(row)
                    }}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    ))

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <>
            <Paper className={classes.table}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader}>Name</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Date</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Amount</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Category</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Type</TableCell>
                                <TableCell className={classes.tableHeader} padding='checkbox' />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                loading ?
                                    <TableRow>
                                        <TableCell colSpan={6} align='center'>
                                            <CircularProgress size={100} color="primary" />
                                        </TableCell>
                                    </TableRow>
                                    :
                                    rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            }
                            {
                                emptyRows > 0 && (
                                    <TableRow key={'empty rows'} style={{ height: (53) * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            {
                // test for showEditActivity to remount dialog to reset initial useState()
                editRow && showEditActivity ?
                    <EditActivity
                        categoriesList={categoriesList}
                        getActivities={getActivities}
                        data={editRow}
                        open={showEditActivity}
                        onClose={() => {
                            setShowEditActivity(false)
                            setEditRow({})
                        }}
                    />
                    :
                    <></>
            }
        </>
    )
}