import {useEffect} from 'react'
import {getLocalStorage} from '../functions/localStorage'


export function useSetup(setPhase: Function){
    //runs on app start. Sets up local storage or pulls local storage data
    useEffect(()=>{
        const getLocal = getLocalStorage()
        setPhase(getLocal?.phase !== null && getLocal?.phase !== undefined ? JSON.parse(getLocal?.phase) : [1])
    }, [])
}