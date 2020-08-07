import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default ({ headers, date, categoryName, amount, type, setDate, setCategoryName, setAmount, setType }) => {

    return (
        <>
            <Typography variant="h5" align="center" color="primary">Please match the following:</Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {/* empty for spacing purposes */}
                    <Typography align="left" color="primary"></Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography align="center" color="primary">Columns found in CSV file</Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" align="left" color="primary">Date:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <FormControl variant="outlined" fullWidth>
                        <Select onChange={e => setDate(e.target.value)} value={date}>
                            {headers.map((element, i) => <MenuItem key={i} value={element}>{element}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" align="left" color="primary">Category:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <FormControl variant="outlined" fullWidth>
                        <Select onChange={e => setCategoryName(e.target.value)} value={categoryName}>
                            {headers.map((element, i) => <MenuItem key={i} value={element}>{element}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" align="left" color="primary">Amount:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <FormControl variant="outlined" fullWidth>
                        <Select onChange={e => setAmount(e.target.value)} value={amount}>
                            {headers.map((element, i) => <MenuItem key={i} value={element}>{element}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" align="left" color="primary">Type:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <FormControl variant="outlined" fullWidth>
                        <Select onChange={e => setType(e.target.value)} value={type}>
                            {headers.map((element, i) => <MenuItem key={i} value={element}>{element}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}