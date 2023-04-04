import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { protocol } from '../data/protocol'

interface answerProps {
    answerPortSet: number[];
    l7Selection: number[];
    setL7Selection: Function;
    answer: protocol;
}

function MapPortButtonsAnswer(props: answerProps) {

    const answerButtonsRow1 = props.answerPortSet.map((el) => {

        let color: 'pass' | 'success' | 'error' = 'pass'
        props.answer.portList.includes(el) ? color = 'success' : color = "error"

        return <Grid key={`${el}key`} item xs={4}>
            <Button
                color={color}
                sx={{ width: "100%" }}
                size="large"
                variant={props.l7Selection.includes(el) ? "contained" : "outlined"}
            >
                {el}
            </Button>
        </Grid>
    })

    return (
        <Grid container spacing={2}>
            {answerButtonsRow1}
        </Grid>
    )
}

export default MapPortButtonsAnswer