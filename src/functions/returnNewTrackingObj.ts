import {repTrackingObject} from '../App'
import produce from "immer"

export function returnNewTrackingObj(
    reps: repTrackingObject, 
    phase: number,
    answer: Boolean
){
    const nextState = produce(reps, draft => {
        if(!draft?.[phase]) draft[phase] = {'correct': 0, 'attempts': 0} //setup phase if not yet added
        console.log(JSON.stringify(draft, null, 2))
        if(answer) draft[phase].correct = draft[phase].correct + 1
        draft[phase].attempts = draft[phase].attempts + 1
        console.log('Updated Draft: ',JSON.stringify(draft, null, 2))
        return draft
    })

    return(nextState)
}