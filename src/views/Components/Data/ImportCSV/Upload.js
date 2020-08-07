import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { DropzoneArea } from 'material-ui-dropzone'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

export default ({ uploadHandler }) => {

    return (
        <>
            <DropzoneArea
                acceptedFiles={['.csv']}
                filesLimit={1}
                clearOnUnmount
                useChipsForPreview
                previewGridProps={{ container: { justify: 'center', spacing: 3, direction: 'row' } }}
                showAlerts={['error', 'info']}
                alertSnackbarProps={{
                    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                    autoHideDuration: 3000
                }}
                dropzoneText={
                    <div style={{ padding: '0 25px 0 25px' }}>
                        <Typography variant="h6" align="center" color="primary">
                            Drag and drop or click to upload a CSV file.
                        </Typography>
                        <br />
                        <Typography align="justify" >
                            Please ensure the CSV file has the following columns:
                        </Typography>
                        <List dense disablePadding>
                            <ListItem >
                                <ListItemIcon><ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary="Date (YYYY-MM-DD)" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary="Name" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary="Amount" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary="Category" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary="Type (income or expense)" />
                            </ListItem>
                        </List>
                    </div>
                }
                onChange={(file) => { uploadHandler(file) }}
            />

            <br />


        </>
    )
}