import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import ActivityTable from './Components/Data/ActivityTable'
import { UserContext } from '../UserContext'
import { Button, ButtonGroup, Typography, Box } from '@material-ui/core'
import AddActivity from './Components/Data/AddActivity'
import EditCategory from './Components/Data/EditCategory'
import ActivityTotal from './Components/Data/ActivityTotal'

export default () => {
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [activitiesList, setActivitiesList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [showAddActivity, setShowAddActivity] = useState(false)
    const [showEditCategory, setShowEditCategory] = useState(false)
    const token = localStorage.getItem('token')

    const getActivities = () => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BACKEND_URL + 'activity/getActivities', {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then((response) => {
            setActivitiesList(response.data)
            setLoading(false)
        })
    }

    const getCategories = () => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BACKEND_URL + 'category/getCategories', {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then((response) => {
            setCategoriesList(response.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getActivities()
        getCategories()
    }, [])

    if (!user && !loading) {
        return (
            <>
                <Nav />
                <Typography>You must be logged in to access this page.</Typography>
            </>
        )
    }

    return (
        <>
            <Nav />
            <Box align="center">
                <ActivityTotal data={activitiesList} />
                <ActivityTable activitiesList={activitiesList} categoriesList={categoriesList} getActivities={getActivities} loading={loading} />
            </Box>
            <br />
            <Box align="center">
                <ButtonGroup variant="contained" size="large" color="primary" >
                    <Button onClick={() => { setShowAddActivity(true) }} key={'addActivity'}>Add Activity</Button>
                    <Button onClick={() => { setShowEditCategory(true) }} key={'editCategory'}>Edit Categories</Button>
                </ButtonGroup>
            </Box>
            <AddActivity categoriesList={categoriesList} open={showAddActivity} getActivities={getActivities} onClose={() => setShowAddActivity(false)} />
            <EditCategory categoriesList={categoriesList} open={showEditCategory} getCategories={getCategories} onClose={() => setShowEditCategory(false)} />
        </>
    )
}