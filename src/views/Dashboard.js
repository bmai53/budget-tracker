import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Components/Nav";
import ActivityTable from "./Components/Data/ActivityTable";
import { UserContext } from "../UserContext";
import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import AddActivity from "./Components/Data/AddActivity";
import EditCategory from "./Components/Data/EditCategory";
import ImportCSV from "./Components/Data/ImportCSV/ImportCSV";
import Graph from "./Components/Graph";

export default () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [activitiesList, setActivitiesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  // dialogs
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [showUploadCSV, setShowUploadCSV] = useState(false);

  const getActivities = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "activity/getActivities", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        setActivitiesList(response.data);
        setLoading(false);
      });
  };

  const getCategories = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "category/getCategories", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        setCategoriesList(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getActivities();
    getCategories();
  }, [user]);

  if (!user) {
    return (
      <>
        <Nav />
        {
          // if token exists show spinner, else display message
          localStorage.getItem("token") ? (
            <Box align='center'>
              <CircularProgress size={100} color='primary' />
            </Box>
          ) : (
            <Typography>You must be logged in to access this page.</Typography>
          )
        }
      </>
    );
  }

  return (
    <>
      <Nav />
      <Box align='center'>
        <ActivityTable
          activitiesList={activitiesList}
          categoriesList={categoriesList}
          getActivities={getActivities}
          loading={loading}
        />
      </Box>
      <br />
      <Box align='center'>
        <div style={{ maxWidth: 1000 }}>
          <ButtonGroup
            variant='contained'
            size='large'
            color='primary'
            fullWidth
          >
            <Button
              onClick={() => {
                setShowEditCategory(true);
              }}
              key={"editCategory"}
            >
              Edit Categories
            </Button>
            <Button
              onClick={() => {
                setShowAddActivity(true);
              }}
              key={"addActivity"}
            >
              Add Activity
            </Button>
            <Button
              onClick={() => {
                setShowUploadCSV(true);
              }}
              key={"uploadCSV"}
            >
              Upload from CSV
            </Button>
          </ButtonGroup>
        </div>
      </Box>
      <AddActivity
        categoriesList={categoriesList}
        open={showAddActivity}
        setShowEditCategory={setShowEditCategory}
        getActivities={getActivities}
        onClose={() => setShowAddActivity(false)}
      />
      <EditCategory
        categoriesList={categoriesList}
        open={showEditCategory}
        getCategories={getCategories}
        getActivities={getActivities}
        onClose={() => setShowEditCategory(false)}
      />
      <Graph data={activitiesList} />
      <ImportCSV
        open={showUploadCSV}
        onClose={() => {
          setShowUploadCSV(false);
        }}
        getActivities={getActivities}
        getCategories={getCategories}
      />
    </>
  );
};
