
function setupLocalStorage(){
    if ( window.localStorage.getItem('phase') === null ){
        window.localStorage.setItem('phase', "1")
        // window.localStorage.setItem("repsCompleted", JSON.stringify({}))
        return
    }
    return
}

export function getLocalStorage(){
    if (typeof window !== 'undefined'){
        setupLocalStorage()
        const phase = window.localStorage.getItem('phase')
        // const repsCompleted = window.localStorage.getItem("repsCompleted")
        return {phase}  
    }
    return
}

export function setLocalStorage(){

}