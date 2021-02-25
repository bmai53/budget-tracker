import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Tooltip,
  CircularProgress,
  FormControlLabel,
  Switch,
  Collapse,
  Grid,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import EditActivity from "./EditActivity";
import ActivityTotal from "./ActivityTotal";
import Filter from "./Filter";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 1000,
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  income: {
    color: theme.palette.positive.main,
  },
  expense: {
    color: theme.palette.negative.main,
  },
}));

export default ({
  activitiesList,
  categoriesList,
  getActivities,
  categoryFilter,
  setCategoryFilter,
  typeFilter,
  setTypeFilter,
  dateFilter,
  setDateFilter,
  showFilters,
  setShowFilters,
  getfilteredList,
  loading,
}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [showFilters, setShowFilters] = useState(false);
  // const [categoryFilter, setCategoryFilter] = useState("all");
  // const [typeFilter, setTypeFilter] = useState("all");
  // const [dateFilter, setDateFilter] = useState(0);
  const [showEditActivity, setShowEditActivity] = useState(false);
  const [editRow, setEditRow] = useState(); // store data of row to edit

  useEffect(() => {
    setData(getfilteredList(activitiesList));
  }, [activitiesList, categoriesList, categoryFilter, typeFilter, dateFilter]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();
  const rows = data.map((row) => (
    <TableRow key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell align='right'>
        {moment(row.date).format("MMMM D, YYYY")}
      </TableCell>
      <TableCell align='right'>{row.amount}</TableCell>
      <TableCell align='right'>{row.category_name}</TableCell>
      <TableCell
        align='right'
        className={row.type === "income" ? classes.income : classes.expense}
      >
        {row.type.charAt(0).toUpperCase() + row.type.slice(1)}
      </TableCell>
      <TableCell>
        <Tooltip title='Edit'>
          <IconButton
            onClick={() => {
              setShowEditActivity(true);
              setEditRow(row);
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  ));

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <Card raised className={classes.table}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4} style={{ verticalAlign: "top" }}>
                  <ActivityTotal data={data} />
                </TableCell>
                <TableCell colSpan={2} align='right'>
                  <FormControlLabel
                    control={
                      <Switch
                        color='primary'
                        checked={showFilters}
                        onChange={() => {
                          setShowFilters(!showFilters);
                        }}
                      />
                    }
                    label='Show Filters'
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6}>
                  <Grid container justify='flex-end'>
                    <Grid item xs={12} sm={6}>
                      <Collapse in={showFilters}>
                        <Filter
                          categoriesList={categoriesList}
                          categoryFilter={categoryFilter}
                          typeFilter={typeFilter}
                          dateFilter={dateFilter}
                          setCategoryFilter={setCategoryFilter}
                          setTypeFilter={setTypeFilter}
                          setDateFilter={setDateFilter}
                        />
                      </Collapse>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.tableHeader}>Name</TableCell>
                <TableCell className={classes.tableHeader} align='right'>
                  Date
                </TableCell>
                <TableCell className={classes.tableHeader} align='right'>
                  Amount
                </TableCell>
                <TableCell className={classes.tableHeader} align='right'>
                  Category
                </TableCell>
                <TableCell className={classes.tableHeader} align='right'>
                  Type
                </TableCell>
                <TableCell className={classes.tableHeader} padding='checkbox' />
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    <CircularProgress size={100} color='primary' />
                  </TableCell>
                </TableRow>
              ) : (
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              )}
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    <Typography>No activities found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                emptyRows > 0 && (
                  <TableRow
                    key={"empty rows"}
                    style={{ height: 53 * emptyRows }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Card>
      {
        // test for showEditActivity to remount dialog to reset initial useState()
        editRow && showEditActivity ? (
          <EditActivity
            categoriesList={categoriesList}
            getActivities={getActivities}
            data={editRow}
            open={showEditActivity}
            onClose={() => {
              setShowEditActivity(false);
              setEditRow({});
            }}
          />
        ) : (
          <></>
        )
      }
    </>
  );
};
