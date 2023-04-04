import { useState, useEffect } from 'react'
import { protocol } from '../data/protocol'
import FlashCard from './FlashCard'
import { repTrackingObject } from '../App'

interface props {
    phaseList: protocol[];
    reps: repTrackingObject;
    setReps: Function;
}

function FlashCardController(props: props) {

    const [card, setCard] = useState(0)

    return (
        <div>
            {props?.phaseList?.[card] ? <FlashCard
                phaseList={props.phaseList}
                answer={props.phaseList[card]}
                card={card}
                setCard={setCard}
                reps={props.reps}
                setReps={props.setReps}
            /> :
                <></>}
        </div>

    )
}

export default FlashCardController