import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { DropzoneArea } from 'material-ui-dropzone'


export default ({ uploadHandler }) => {

    return (
        <>
            <DropzoneArea
                acceptedFiles={['.csv']}
                filesLimit='1'
                dropzoneText={
                    <div style={{padding: '0 25px 0 25px'}}>
                        <Typography variant="h6" align="center" color="primary">
                            Drag and drop or click to upload a CSV file.
                        </Typography>
                        <br/>
                        <Typography variant="body2" align="justify" >
                            Please ensure the CSV file has the following columns:
                        </Typography>
                        <List dense>
                            <ListItem >
                                <ListItemText primary="Date (YYYY-MM-DD)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Name" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Amount" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Category" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Type" />
                            </ListItem>
                        </List>
                    </div>
                }
                onChange={() => uploadHandler}
            />

            <br />


        </>
    )
}