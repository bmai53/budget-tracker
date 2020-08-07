import React, { useState } from 'react'
import axios from 'axios'
import theme from '../../../../theme'
import { DialogTitle, Dialog, DialogContent, IconButton, } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { readString } from 'react-papaparse'
import HeaderMatching from './HeaderMatching';
import Upload from './Upload'
import ErrorSnackbar from './ErrorSnackbar'


export default ({ open, onClose, getActivities, getCategories }) => {
    const [parsedFile, setParsedFile] = useState([])
    const [headers, setHeaders] = useState([])                      // headers from file
    const [confirmHeaders, setConfirmHeaders] = useState(false)     // display header confirmation form

    // headers
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')

    // snackbars
    const [emptyCells, setEmptyCells] = useState(false)
    const [duplicateCol, setDuplicateCol] = useState(false)
    const [failedToReadFile, setFailedToReadFile] = useState(false)
    const [noFile, setNoFile] = useState(false)
    const [headerMismatch, setHeaderMismatch] = useState(false)
    const [DuplicateHeader, setDuplicateHeader] = useState(false)
    const [UploadError, setUploadError] = useState(false)
    const [UploadSuccess, setUploadSuccess] = useState(false)


    const uploadHandler = (file) => {


        if (file.length > 0) {
            // reading headers
            const reader = new FileReader()
            // file -> string
            reader.readAsText(file[0])
            // read as a string
            reader.onload = (event) => {
                const fileContent = event.target.result
                const parseResults = readString(fileContent)     // papaparse
                let safeToContinue = true
                

                // remove last line if empty
                if (parseResults.data[parseResults.data.length - 1 ][0] === ""){
                    parseResults.data.pop()
                }

                // check for empty cells
                parseResults.data.map(row => {
                    if (row.indexOf('') !== -1) {
                        setEmptyCells(true)
                        safeToContinue = false
                    }
                })

                // check for duplicates in headers
                if (new Set(parseResults.data[0]).size !== parseResults.data[0].length) {
                    setDuplicateCol(true)
                    safeToContinue = false
                }

                if (safeToContinue) {
                    setHeaders(parseResults.data[0])
                    setDate(parseResults.data[0][0] ? parseResults.data[0][0] : '')
                    setName(parseResults.data[0][1] ? parseResults.data[0][1] : '')
                    setCategoryName(parseResults.data[0][2] ? parseResults.data[0][2] : '')
                    setAmount(parseResults.data[0][3] ? parseResults.data[0][3] : '')
                    setType(parseResults.data[0][4] ? parseResults.data[0][4] : '')
                    setParsedFile(parseResults.data)
                    setConfirmHeaders(true)
                }
            }

            reader.onerror = (event) => {
                setFailedToReadFile(true)
            }
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (parsedFile.length === 0) {
            setNoFile(true)
        }
        // if headers are not yet mapped
        else if (!date || !name || !categoryName || !amount || !type) {
            setHeaderMismatch(true)
        }
        // duplicate matches
        else if (new Set([date, name, categoryName, amount, type]).size !== 5) {
            setDuplicateHeader(true)
        }
        else {
            // mapping columns to columns found in csv file
            const map = {
                date: headers.indexOf(date),
                name: headers.indexOf(name),
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
                    console.log(res.data.message)
                    setUploadSuccess(true)
                    getActivities()
                    getCategories()
                    onClose()
                })
                .catch(error => {
                    setUploadError(true)
                    getActivities()
                    getCategories()
                    onClose()
                })
        }

    }

    return (
        <>
            <Dialog 
                open={open ? open : false}
                onClose={() => {
                    // unmount HeaderMatching to remove file
                    setConfirmHeaders(false)
                    onClose()
                }}
            >
                <DialogTitle style={{ backgroundColor: theme.palette.primary.main, color: "white" }}>
                    {confirmHeaders ? 'Please match the following' : 'Upload CSV'}
                    <IconButton onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                        <CancelIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {
                        confirmHeaders ?
                            <HeaderMatching
                                headers={headers}
                                date={date} name={name} categoryName={categoryName} amount={amount} type={type}
                                setDate={setDate} setName={setName} setCategoryName={setCategoryName} setAmount={setAmount} setType={setType}
                                submitHandler={submitHandler}
                            />
                            :
                            <Upload uploadHandler={uploadHandler} />
                    }
                </DialogContent>
            </Dialog>
            <ErrorSnackbar 
                open={emptyCells} onClose={() => { setEmptyCells(false) }} severity={'error' }
                message={'Empty cells detected.'}
            />
            <ErrorSnackbar
                open={duplicateCol} onClose={() => { setDuplicateCol(false) }} severity={'error'}
                message={'Duplicate columns detected.'}
            />
            <ErrorSnackbar
                open={failedToReadFile} onClose={() => { setFailedToReadFile(false) }} severity={'error'}
                message={'Failed to read file.'}
            />

            <ErrorSnackbar
                open={noFile} onClose={() => { setNoFile(false) }} severity={'error'}
                message={'No file found.'}
            />
            <ErrorSnackbar
                open={headerMismatch} onClose={() => { setHeaderMismatch(false) }} severity={'error'}
                message={'Headers are not all matched.'}
            />
            <ErrorSnackbar
                open={DuplicateHeader} onClose={() => { setDuplicateHeader(false) }} severity={'error'}
                message={'Duplicate header match detected.'}
            />
            <ErrorSnackbar
                open={UploadError} onClose={() => { setUploadError(false) }} severity={'error'}
                message={'Upload error.'}
            />
            <ErrorSnackbar
                open={UploadSuccess} onClose={() => { setUploadSuccess(false) }} severity={'success'}
                message={'CSV file uploaded successfully!'}
            />

        </>
    )
}
