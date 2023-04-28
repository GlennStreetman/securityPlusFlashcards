import {useEffect} from 'react'
import { repTrackingObject } from '../routes/flashCards'
import {protocol} from '../data/protocol'

export default function useCheckReps(
    reps: repTrackingObject, 
    length: protocol[], 
    navigate: Function
    ){
    //Navigate to check reps page if all cards have been reviewed twice.
    useEffect(()=>{
        if (length !== undefined){
            
            let totalReps = Object.values(reps).reduce((prev, curr)=>{
                prev = prev + curr.attempts
                return prev
            }, 0) 
            console.log('checking reps', totalReps, length.length * 2)
            if (totalReps >= length.length * 2) navigate()
        } 
    }, [reps])
}