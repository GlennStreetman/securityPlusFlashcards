
function setupLocalStorage(){
    if ( window.localStorage.getItem('phase') === null ){
        console.log('---SETTING UP LOCAL STORAGE------')
        window.localStorage.setItem('phase', '[1]')
        return
    }
    return
}

export function getLocalStorage(){
    if (typeof window !== 'undefined'){
        setupLocalStorage()
        const phase = window.localStorage.getItem('phase')
        return {phase}  
    }
    return
}

export function setLocalStorage(newCards: number[]){
    if (typeof window !== 'undefined'){
        setupLocalStorage()
        window.localStorage.setItem('phase', JSON.stringify(newCards))
    }
    return
}
