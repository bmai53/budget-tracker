import React from "react";

import { TextField, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginBottom: "24px",
  },

  filterFooter: {
    textAlign: "center",
  },
}));

export default ({
  categoriesList,
  categoryFilter,
  typeFilter,
  dateFilter,
  setCategoryFilter,
  setTypeFilter,
  setDateFilter,
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        className={classes.inputField}
        label='Category Filter'
        type='text'
        fullWidth
        select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <MenuItem value='all' key='all'>
          All
        </MenuItem>
        {categoriesList.map((c) => (
          <MenuItem value={c.name} key={c.name}>
            {c.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className={classes.inputField}
        label='Type Filter'
        type='text'
        fullWidth
        select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <MenuItem value='all'>All</MenuItem>
        <MenuItem value='income'>Income</MenuItem>
        <MenuItem value='expense'>Expense</MenuItem>
      </TextField>
      <TextField
        className={classes.inputField}
        label='Date Filter'
        type='text'
        fullWidth
        select
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <MenuItem value={0}>All</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={362}>1 Year</MenuItem>
      </TextField>

      <div className={classes.filterFooter}>
        <Button
          color='primary'
          onClick={() => {
            setCategoryFilter("all");
            setTypeFilter("all");
            setDateFilter(0);
          }}
        >
          Clear Filters
        </Button>
      </div>
    </>
  );
};
