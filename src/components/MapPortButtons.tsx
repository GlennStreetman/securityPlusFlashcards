import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface answerProps {
    answerPortSet: number[];
    l7Selection: number[];
    setL7Selection: Function;
}

function MapPortButtons(props: answerProps) {

    const answerButtonsRow1 = props.answerPortSet.map((el) => {
        return <Grid key={`${el}key`} item xs={4}>
            <Button
                onClick={() => {
                    let newList = [...props.l7Selection]
                    if (props.l7Selection.includes(el)) {
                        newList.splice(newList.indexOf(el), 1)
                    } else {
                        newList.push(el)
                    }
                    props.setL7Selection(newList)
                }}
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

export default MapPortButtons