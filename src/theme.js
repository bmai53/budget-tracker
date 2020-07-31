import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#35B234',        // Light green
            contrastText: "#FFFFFF" 
        },
        secondary: {
            main: '#FFFFFF'     // White
        },
        positive: {
            main: '#4caf50'      // default palette success
        },
        negative: {
            main: '#f44336'     // default palette error
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

export default theme