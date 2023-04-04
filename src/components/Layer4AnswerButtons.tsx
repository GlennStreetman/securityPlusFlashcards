import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface props {
    selection: "TCP" | "UDP" | "TCP/UDP"
    setSelection: Function
}

function Layer4AnswerButtons(props: props) {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                onClick={() => props.setSelection('TCP')}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "TCP" ? "contained" : "outlined"}
                size="large">
                TCP
            </Button>
            <Button
                onClick={() => props.setSelection('UDP')}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "UDP" ? "contained" : "outlined"}
                size="large">
                UDP
            </Button>
            <Button
                onClick={() => props.setSelection('TCP/UDP')}
                sx={{ width: "33.333333%" }}
                variant={props.selection === "TCP/UDP" ? "contained" : "outlined"}
                size="large">
                TCP/UDP
            </Button>
        </Stack>
    )
}

export default Layer4AnswerButtons