import {useState, useEffect} from 'react'
import {protocol, layer7Protocols} from '../data/protocol'

// function shuffleArray(array: number[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

export function useGenerateFlashcardAnswers(
    card: number, 
    answer: protocol, 
    setAnswerPortSet: Function, 
    phaseList: protocol[]){

    useEffect(()=>{
        if (answer?.portList !== undefined){
            let newAnswerSet = new Set(answer.portList)
            while(newAnswerSet.size < 6){ 
                const randomElement = phaseList[Math.floor(Math.random() * phaseList.length)].portList
                randomElement.forEach(item => newAnswerSet.add(item))
            }
            let thisAnswerSet = Array.from(newAnswerSet).slice(0,6)
            thisAnswerSet.sort()
            setAnswerPortSet(thisAnswerSet)
        } 
    }, [card])
}