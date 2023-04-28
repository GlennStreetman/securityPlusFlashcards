import { useState, createContext, useContext, useEffect } from "react";
import { useSetup } from './useSetup'
import { usePhase } from './usePhase'
import { protocol } from "../data/protocol";
import { setLocalStorage } from '../functions/localStorage'

interface progress {
    correct: number
    attempts: number
}

export interface repTrackingObject {
    [key: number]: progress
}

export interface appContext {
    phase: number[] //List of active flashcards. See /data/protocol
    setPhase: Function
    phaseList: protocol[] //list of cards in current phase, set by phase number
    setPhaseList: Function
    reps: repTrackingObject //current progress. Resets after review. Phase updated by 1 based upon performance
    setReps: Function
}


const FlashCardContext = createContext<appContext>({
    phase: [1],
    setPhase: () => { },
    phaseList: [],
    setPhaseList: () => { },
    reps: {},
    setReps: () => { },
})

export function useFlashCardProgress() {
    return useContext(FlashCardContext)
}
// @ts-ignore
export default function AppState({ children }) {

    const [phase, setPhase] = useState() //
    const [phaseList, setPhaseList] = useState([]) // list of protocols included in this phase of test.
    const [reps, setReps] = useState<repTrackingObject>({}) //target count before check. Use Custom hook to check.

    useSetup(setPhase) //run once on load. Setup local storage
    usePhase(phase, setPhaseList) // on phase change, generate new random list of flashcards.

    useEffect(() => {
        if (phase) setLocalStorage(phase)
    }, [phase])

    return (
        <FlashCardContext.Provider value={{
            'phase': phase || [1],
            'setPhase': setPhase,
            'phaseList': phaseList,
            'setPhaseList': setPhaseList,
            'reps': reps,
            'setReps': setReps
        }}>
            {children}
        </FlashCardContext.Provider>
    )
}