import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import theme from "../../../theme";
import {
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Box,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

export default ({
  open,
  onClose,
  categoriesList,
  getActivities,
  setShowEditCategory,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [type, setType] = useState("");
  // const [categoriesList, setCategoriesList] = useState([])

  const handleSubmit = useCallback(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "activity/addActivity",
        {
          name: name,
          amount: amount,
          date: date,
          category_id: categoryId,
          type: type,
        },
        {
          headers: {
            Authorization: `JWT ${token}`,
          },
        }
      )
      .then(() => {
        setName("");
        setAmount(0);
        setDate("");
        setCategoryId("");
        setType("");
        getActivities();
        onClose();
      });
  }, [getActivities, onClose, amount, categoryId, date, name, type]);

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
  }, [open, handleSubmit]);

  return (
    <Dialog open={open ? open : false} onClose={onClose}>
      <DialogTitle
        style={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        Add Activity
        <IconButton
          color='secondary'
          onClick={onClose}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <CancelIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label='Name'
          type='text'
          fullWidth
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          label='Amount'
          type='number'
          InputProps={{
            inputProps: {
              min: 0,
            },
          }}
          fullWidth
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <TextField
          label='Date'
          type='date'
          fullWidth
          value={date}
          InputLabelProps={{ shrink: true }}
          onChange={(event) => setDate(event.target.value)}
        />
        <Box width='100%' style={{ display: "inline-flex" }}>
          <TextField
            label='Category'
            fullWidth
            value={categoryId}
            select
            onChange={(event) => setCategoryId(event.target.value)}
          >
            {categoriesList.map((c) => (
              <MenuItem value={c.id} key={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </TextField>
          <DialogActions style={{ position: "relative", top: "10px" }}>
            <Button
              color='primary'
              onClick={() => {
                onClose();
                setShowEditCategory(true);
              }}
            >
              Add New Category
            </Button>
          </DialogActions>
        </Box>
        <TextField
          label='Type'
          fullWidth
          value={type}
          select
          onChange={(event) => setType(event.target.value)}
        >
          <MenuItem value={"expense"}>Expense</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
        </TextField>
        <DialogActions>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
