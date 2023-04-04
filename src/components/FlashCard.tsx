import { useState } from 'react'
import { protocol } from '../data/protocol'
import { useGenerateFlashcardAnswers } from '../hooks/getFlashCardAnswers'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MapPortButtons from './MapPortButtons'
import MapPortButtonsAnswer from './MapPortButtonsAnswer'
import Layer4AnswerButtons from './Layer4AnswerButtons';
import Layer4AnswerButtonsAnswer from './Layer4AnswerButtonAnswer';
import { checkAnswer } from "../functions/checkAnswer"
import { repTrackingObject } from '../App'
import { returnNewTrackingObj } from '../functions/returnNewTrackingObj';

interface props {
    phaseList: protocol[];
    answer: protocol;
    setCard: Function;
    card: number;
    reps: repTrackingObject;
    setReps: Function;
}

function submitAnswer(
    reps: repTrackingObject,
    setCardStatus: Function,
    setReps: Function,
    l4Selection: "TCP" | "UDP" | "TCP/UDP",
    l7Selection: number[],
    answer: protocol,
    setAnswerStatus: Function,
    setL7Selection: Function
) {
    let checkedAnswer = checkAnswer(answer, l4Selection, l7Selection)
    let answerPhase = answer.phase
    let update = returnNewTrackingObj(reps, answerPhase, checkedAnswer)
    console.log('updated reps', reps)
    setReps(update)
    setCardStatus("Next")
    setAnswerStatus(checkedAnswer)
    setL7Selection([...l7Selection, ...answer.portList])
}

function resetCard(
    setCardStatus: Function,
    setL4Selection: Function,
    setL7Selection: Function,
    card: number,
    setCard: Function,
    maxCard: number
) {
    setL4Selection("TCP")
    setL7Selection([])
    setCardStatus("Submit")
    setCard(card + 1 <= maxCard ? card + 1 : 0)
}


function FlashCard(props: props) {

    const [answerPortSet, setPortAnswerSet] = useState<number[] | null>()
    const [cardStatus, setCardStatus] = useState<"Submit" | "Next">('Submit')
    const [l4Selection, setL4Selection] = useState<"TCP" | "UDP" | "TCP/UDP">('TCP')
    const [l7Selection, setL7Selection] = useState<number[]>([])
    const [answerStatus, setAnswerStatus] = useState(false)

    useGenerateFlashcardAnswers(props.card, props.answer, setPortAnswerSet, props.phaseList)

    return (
        <>
            {cardStatus === "Submit" ?
                // SUBMIT PAGE
                <div>
                    <Card sx={{ padding: "8px" }}>
                        <Box>
                            <h2>{props?.answer?.l7}</h2> <br />
                        </Box>
                        <br />
                        <Box>
                            {answerPortSet ? <MapPortButtons
                                l7Selection={l7Selection}
                                setL7Selection={setL7Selection}
                                answerPortSet={answerPortSet}
                            /> :
                                <></>}
                        </Box>
                        <br />
                        <Box>
                            <Layer4AnswerButtons selection={l4Selection} setSelection={setL4Selection} />
                        </Box>
                        <br />
                        <Box >
                            <Button
                                sx={{ width: "33.333333%" }}
                                variant="outlined"
                                onClick={() =>
                                    submitAnswer(
                                        props.reps,
                                        setCardStatus,
                                        props.setReps,
                                        l4Selection,
                                        l7Selection,
                                        props.answer,
                                        setAnswerStatus,
                                        setL7Selection
                                    )
                                }>
                                {cardStatus}
                            </Button>
                        </Box>
                    </Card>
                </div>
                :
                // CHECK PAGE
                <div>
                    <Card sx={{ padding: "8px" }}>
                        <Box>
                            <h2>{props?.answer?.l7} answer is: {`${answerStatus}`}</h2>
                            <br />
                        </Box>
                        <br />
                        <Box>
                            {answerPortSet ? <MapPortButtonsAnswer
                                l7Selection={l7Selection}
                                setL7Selection={setL7Selection}
                                answerPortSet={answerPortSet}
                                answer={props.answer}
                            /> :
                                <></>}
                        </Box>
                        <br />
                        <Box>
                            <Layer4AnswerButtonsAnswer
                                selection={l4Selection}
                                setSelection={setL4Selection}
                                answer={props.answer.l4}
                            />
                        </Box>
                        <br />
                        <Box >
                            <Button
                                sx={{ width: "33.333333%" }}
                                variant="outlined"
                                onClick={() =>
                                    resetCard(
                                        setCardStatus,
                                        setL4Selection,
                                        setL7Selection,
                                        props.card,
                                        props.setCard,
                                        props.phaseList.length - 1
                                    )
                                }>
                                {cardStatus}
                            </Button>
                        </Box>
                    </Card>
                </div>
            }
        </>
    )
}

export default FlashCard