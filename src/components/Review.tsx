import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { repTrackingObject } from '../hooks/AppContext'
import { layer7Protocols } from '../data/protocol'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface props {
    reps: repTrackingObject
    setReps: Function
    phase: number[]
    setPhase: Function
}

const maxPhase = layer7Protocols.reduce((prev, curr) => {
    if (curr.phase > prev) prev = curr.phase
    return prev
}, 0)

function checkProgress(reps: repTrackingObject) {
    let pass = true
    Object.values(reps).forEach((el) => {
        const correctPercent = (el.correct / el.attempts) * 100
        if (correctPercent <= 85) pass = false
    })
    // if (pass && phase < maxPhase) {
    //     setPhase(phase + 1)
    //     window.localStorage.setItem('phase', `${phase + 1}`)
    // }
    return pass
}

function Review(props: props) {

    const [pass, setPass] = useState(false)

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/flashCards`;
        navigate(path);
    }

    useEffect(() => {
        const pass = checkProgress(props.reps)
        setPass(pass)

    }, [])

    const rows = Object.entries(props.reps).map((el, indx) => {
        return (
            <TableRow>
                <TableCell align="center">{el[0]}</TableCell>
                <TableCell align="right">{el[1].correct}</TableCell>
                <TableCell align="right">{el[1].attempts}</TableCell>
                <TableCell align="right">{Math.round((el[1].correct / el[1].attempts) * 100)}%</TableCell>
            </TableRow>
        )
    })
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
                <Typography>
                    {pass ?
                        "Good job, all phases complete with an 85% grade" :
                        "Uh oh, progress on the current groups of cards still needs to be made. Lets try again"}
                    {pass ?
                        "Congrats, all phases complete. You are ready" :
                        ""
                    }
                </Typography>
            </div>
            <br />
            <Button variant="outlined" onClick={() => {
                props.setReps({})
                routeChange()
            }}>Return to Flashcards</Button>
        </>
    )
}

export default Review