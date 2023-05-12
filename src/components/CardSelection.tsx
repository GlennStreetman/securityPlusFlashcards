import { useState, useEffect } from 'react'
import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface cardProps {
    phase: number[]
    setPhase: Function
}

interface checkBoxCards {
    num: string
    setPhase: Function
    phase: number[]
}

function update(add: boolean, num: string, phase: number[], setPhase: Function) {
    const numb = Number(num)
    if (add) {
        const newPhase = [...phase, numb]
        setPhase(newPhase)
    } else {
        const newPhase = [...phase].filter(item => item !== numb)
        setPhase(newPhase)
    }
}

function CardCheckBox(props: checkBoxCards) {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(props.phase.includes(Number(props.num)))
    }, [props.phase])

    return <FormControlLabel
        control={<Checkbox checked={checked} onClick={() => {
            console.log('click')
            setChecked(!checked)
            update(!checked, props.num, props.phase, props.setPhase)
        }
        } />

        }
        label={props.num} />
}

function CardSelection(props: cardProps) {
    return (
        <div>
            <Typography>Review Phase:&nbsp;&nbsp;
                <CardCheckBox num='1' phase={props.phase} setPhase={props.setPhase} />
                <CardCheckBox num='2' phase={props.phase} setPhase={props.setPhase} />
                <CardCheckBox num='3' phase={props.phase} setPhase={props.setPhase} />
                <CardCheckBox num='4' phase={props.phase} setPhase={props.setPhase} />
                <CardCheckBox num='5' phase={props.phase} setPhase={props.setPhase} />
            </Typography>
        </div>
    )
}

export default CardSelection