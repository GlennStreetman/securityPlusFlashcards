import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface props {
    selection: "TCP" | "UDP" | "TCP/UDP"
    setSelection: Function
    answer: "TCP" | "UDP" | "TCP/UDP";
}

interface colorLookup {
    TCP: 'success' | 'error' | 'info'
    UDP: 'success' | 'error' | 'info'
    "TCP/UDP": 'success' | 'error' | 'info'
}

function Layer4AnswerButtonsAnswer(props: props) {

    let lookup = ["TCP", "UDP", "TCP/UDP"]
    let color: colorLookup = lookup.reduce((prev, curr) => {
        let color = 'info'
        if (curr === props.selection && curr !== props.answer) color = 'error'
        if (curr === props.selection && curr === props.answer) color = 'success'
        // @ts-ignore
        prev[curr] = color
        return prev
    }, { TCP: 'info', UDP: 'info', "TCP/UDP": 'info' })

    console.log('color lookup', color)
    return (
        <Stack direction="row" spacing={2}>
            <Button
                color={color['TCP']}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "TCP" || props.answer === "TCP" ? "contained" : "outlined"}
                size="large">
                TCP
            </Button>
            <Button
                color={color['UDP']}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "UDP" || props.answer === "UDP" ? "contained" : "outlined"}
                size="large">
                UDP
            </Button>
            <Button
                color={color['TCP/UDP']}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "TCP/UDP" || props.answer === "TCP/UDP" ? "contained" : "outlined"}
                size="large">
                TCP/UDP
            </Button>
        </Stack>
    )
}

export default Layer4AnswerButtonsAnswer