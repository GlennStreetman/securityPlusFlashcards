import {useEffect} from 'react'
import {getLocalStorage} from '../functions/localStorage'


export function useSetup(setPhase: Function){
    //runs on app start. Sets up local storage or pulls local storage data
    useEffect(()=>{
        console.log('running useSetup')
        const getLocal = getLocalStorage()
        console.log(getLocal)
        setPhase(getLocal?.phase ? Number(getLocal?.phase) : 1)
        // setReps(getLocal?.repsCompleted ? JSON.parse(getLocal?.repsCompleted) : {})
    }, [])
}