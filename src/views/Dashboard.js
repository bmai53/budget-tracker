import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import ActivityTable from './Components/Data/ActivityTable'
import { UserContext } from '../UserContext'
import { Button, ButtonGroup, Typography, Box } from '@material-ui/core'
import AddActivity from './Components/Data/AddActivity'
import EditCategory from './Components/Data/EditCategory'


export default () => {
    const { user } = useContext(UserContext)
    const [categoriesList, setCategoriesList] = useState([])
    const [showAddActivity, setShowAddActivity] = useState(false)
    const [showEditCategory, setShowEditCategory] = useState(false)

    useEffect(() => {
        // category data
        const token = localStorage.getItem('token')
        axios.get(process.env.REACT_APP_BACKEND_URL + 'category/getCategories', {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then((response) => {
            // console.log(response.data)
            setCategoriesList(response.data)
        })
    }, [])

    return (
        <>
            <Nav />
            {
                user ?
                    <>
                        <Typography variant='h3' align='center'>Activities</Typography>
                        <br />
                        <Box align="center">
                            <ActivityTable categoriesList={categoriesList}/>
                        </Box>
                        <br />
                        <Box align="center">
                            <ButtonGroup variant="contained" size="large" color="primary" >
                                <Button onClick={() => { setShowAddActivity(true) }} key={'addActivity'}>Add Activity</Button>
                                <Button onClick={() => { setShowEditCategory(true) }} key={'editCategory'}>Edit Categories</Button>
                            </ButtonGroup>
                        </Box>

                        <AddActivity categoriesList={categoriesList} open={showAddActivity} onClose={() => setShowAddActivity(false)} />
                        <EditCategory categoriesList={categoriesList} open={showEditCategory} onClose={() => setShowEditCategory(false)} />
                    </>
                    :
                    <Typography>You must be logged in to access this page.</Typography>
            }
        </>
    )
}