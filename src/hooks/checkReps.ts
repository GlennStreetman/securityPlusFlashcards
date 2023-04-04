import {useEffect} from 'react'
import {protocol, layer7Protocols} from '../data/protocol'
import { repTrackingObject } from '../App'

export function checkReps(
    setPage: Function, 
    reps: repTrackingObject, 
    phase: number,
    length: number[] | undefined 
    ){
    //if reps.
    useEffect(()=>{
        if (length !== undefined){
            
            let totalReps = Object.values(reps).reduce((prev, curr)=>{
                prev = prev + curr.attempts
                return prev
            }, 0) 
            console.log('checking reps', totalReps, length.length * 2)
            if (totalReps >= length.length * 2) setPage('review')

        }
    }, [reps])
}