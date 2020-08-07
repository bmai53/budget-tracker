import React, { useState } from 'react'
import axios from 'axios'
import theme from '../../../../theme'
import { DialogTitle, Dialog, DialogContent, IconButton, } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { readString } from 'react-papaparse'
import HeaderMatching from './HeaderMatching';
import Upload from './Upload'


export default ({ open, onClose }) => {
    const [parsedFile, setParsedFile] = useState([])
    const [headers, setHeaders] = useState([])                      // headers from file
    const [confirmHeaders, setConfirmHeaders] = useState(false)     // display header confirmation form

    // headers
    const [date, setDate] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')

    const uploadHandler = (event) => {

        // function to reset file when error is found
        const resetFile = () => {
            document.getElementById('CSVUpload').value = ''
        }

        // reading headers
        const reader = new FileReader()
        // file -> string
        reader.readAsText(event.target.files[0])
        // read as a string
        reader.onload = (event) => {
            const fileContent = event.target.result
            console.log(fileContent)
            const parseResults = readString(fileContent)     // papaparse
            let safeToContinue = true
            // check for empty cells
            parseResults.data.map(row => {
                if (row.indexOf('') !== -1) {
                    alert('Empty cells detected')
                    safeToContinue = false
                    // resetFile()
                }
            })

            // check for duplicates in headers
            if (new Set(parseResults.data[0]).size !== parseResults.data[0].length) {
                alert('duplicate column names detected')
                safeToContinue = false
                // resetFile()
            }

            if (safeToContinue) {
                setHeaders(parseResults.data[0])
                setDate(parseResults.data[0][0] ? parseResults.data[0][0] : '')
                setCategoryName(parseResults.data[0][1] ? parseResults.data[0][1] : '')
                setAmount(parseResults.data[0][2] ? parseResults.data[0][2] : '')
                setType(parseResults.data[0][3] ? parseResults.data[0][3] : '')
                setParsedFile(parseResults.data)
                setConfirmHeaders(true)
            }
        }

        reader.onerror = (event) => {
            alert('failed to read file')
            // resetFile();
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (parsedFile.length === 0) {
            alert('no file')
        }
        // if headers are not yet mapped
        else if (!date || !categoryName || !amount || !type) {
            alert('headers not matched')
        }
        // duplicate matches
        else if (new Set([date, categoryName, amount, type]).size !== 4) {
            alert('matching duplicate headers')
        }
        else {
            // mapping columns to columns found in csv file
            const map = {
                date: headers.indexOf(date),
                categoryName: headers.indexOf(categoryName),
                amount: headers.indexOf(amount),
                type: headers.indexOf(type),
            }

            const data = {
                data: parsedFile,
                map: map,
            }
            const token = localStorage.getItem('token')

            // sending to server
            axios.post(process.env.REACT_APP_BACKEND_URL + 'activity/uploadCSV', data, {
                headers: { Authorization: `JWT ${token}` }
            })
                .then(res => {
                    console.log('Upload done', res.data.message)
                    window.location.reload()
                })
                .catch(error => {
                    alert(error)
                    window.location.reload()
                })
        }

    }

    return (
        <>
            <Dialog open={open ? open : false} onClose={onClose}>
                <DialogTitle style={{ backgroundColor: theme.palette.primary.main, color: "white" }}>
                    Upload CSV
                    <IconButton color="secondary" onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                        <CancelIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {
                        confirmHeaders ?
                            <HeaderMatching 
                                headers={headers}
                                date={date} categoryName={categoryName} amount={amount} type={type}
                                setDate={setDate} setCategoryName={setCategoryName} setAmount={setAmount} setType={setType}
                            />
                            :
                            <Upload uploadHandler={uploadHandler}/>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}