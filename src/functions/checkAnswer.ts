import { protocol } from '../data/protocol'

export function checkAnswer(solution: protocol, l4: 'TCP' | "UDP" | 'TCP/UDP', l7PortList: number[]){
    let isCorrect = true
    if (solution.l4 !== l4 ) {isCorrect = false}
    if (
        solution.portList.length !== l7PortList.length ||
        solution.portList.reduce((prev, curr)=>{return prev + curr}, 0) !== l7PortList.reduce((prev, curr)=>{return prev + curr}, 0)
    ) {
        isCorrect = false
        console.log(solution.portList.reduce((prev, curr)=>{return prev + curr}, 0))
        console.log(l7PortList.reduce((prev, curr)=>{return prev + curr}, 0))
    }
    return isCorrect
}