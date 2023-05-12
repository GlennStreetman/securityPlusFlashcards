import {useEffect} from 'react'
import {layer7Protocols, protocol} from '../data/protocol'
import {shuffle} from "../functions/shuffleArray"


export function usePhase(phase: number[] | undefined, setPhaseList: Function){
    //setup phase data on change to phase.
    useEffect(()=>{
        const reduceProtocols = layer7Protocols.reduce<protocol[]>((prev,curr)=>{
            if (phase && phase.includes(curr.phase)) prev.push(curr)
            return prev
        }, [])
        setPhaseList(shuffle(reduceProtocols))
    }, [phase])
}