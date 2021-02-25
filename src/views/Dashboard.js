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
import DashboardGraphs from "./DashboardGraphs";

export default () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [activitiesList, setActivitiesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  // dialogs
  const [showFilters, setShowFilters] = useState(false);
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [showUploadCSV, setShowUploadCSV] = useState(false);

  //filters
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState(0);

  const getfilteredList = (list) => {
    let filteredData = list;

    if (categoryFilter !== "all") {
      filteredData = filteredData.filter(
        (a) => a.category_name === categoryFilter
      );
    }
    if (typeFilter !== "all") {
      filteredData = filteredData.filter((a) => a.type === typeFilter);
    }
    if (dateFilter !== 0) {
      const today = new Date();
      // using getDate to calculate date 0, 30, 60, 180, 365 days ago
      const duration = new Date(
        new Date().setDate(today.getDate() - dateFilter)
      );
      filteredData = filteredData.filter((a) => new Date(a.date) >= duration);
    }

    return filteredData;
  };
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
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          getfilteredList={getfilteredList}
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
      <DashboardGraphs activitiesList={getfilteredList(activitiesList)} />
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
