import { useState } from 'react'
import { repTrackingObject } from '../App'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

interface props {
    reps: repTrackingObject
    setPage: Function;
}

interface tableRowObj {
    phase: number;
    reps: number;
    attempts: number;
    percentage: number;
}

const columns: GridColDef[] = [
    { field: 'Phase', headerName: 'Phase', width: 70 },
    { field: 'Correct', headerName: 'Correct name', width: 130 },
    { field: 'Attempts', headerName: 'Attempts', width: 130 },
    { field: 'Percentage', headerName: 'Percentage', width: 130 },
];

function Review(props: props) {
    console.log('review page loaded')
    const rows = Object.entries(props.reps).map((el, indx) => {
        return (<TableRow>
            <TableCell align="center">{el[0]}</TableCell>
            <TableCell align="right">{el[1].correct}</TableCell>
            <TableCell align="right">{el[1].attempts}</TableCell>
            <TableCell align="right">{Math.round((el[1].correct / el[1].attempts) * 100)}%</TableCell>
        </TableRow>
        )
    })
    console.log(props.reps)
    return (
        <>
            <h1>Lets Check your progress!</h1>
            <br />
            <br />
            <div style={{ height: 400, width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Phase</TableCell>
                                <TableCell align="center">Correct</TableCell>
                                <TableCell align="center">Attempts</TableCell>
                                <TableCell align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <br />
            <Button variant="outlined" onClick={() => props.setPage('flash')}>Return to Flashcards</Button>
        </>
    )
}

export default Review