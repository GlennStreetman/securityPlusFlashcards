import { useState, useEffect } from 'react'
import { protocol } from '../data/protocol'
import FlashCard from './FlashCard'
import { repTrackingObject } from '../routes/flashCards'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

interface props {
    phase: number
    phaseList: protocol[];
    reps: repTrackingObject;
    setReps: Function;
}

function FlashCardController(props: props) {

    const [card, setCard] = useState(0)

    const reviewProtocols = props.phaseList.reduce((prev, curr) => {
        return `${prev}${curr.l7},  `
    }, '').slice(0, -4)

    return (
        <div>
            {props?.phaseList?.[card] ?
                <Stack spacing={4}>
                    <FlashCard
                        phaseList={props.phaseList}
                        answer={props.phaseList[card]}
                        card={card}
                        setCard={setCard}
                        reps={props.reps}
                        setReps={props.setReps}
                    />
                    <Card>
                        <CardContent>
                            <Typography>Current Phase: {props.phase}</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography>Currently Reviewing: {reviewProtocols}</Typography>
                        </CardContent>
                    </Card>
                </Stack> :
                <></>
            }
        </div >

    )
}

export default FlashCardController