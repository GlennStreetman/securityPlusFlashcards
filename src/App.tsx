import { useState } from 'react'
import './App.css'
import { useSetup } from './hooks/useSetup'
import { usePhase } from './hooks/usePhase'
import { checkReps } from './hooks/checkReps'
import FlashCardController from './components/FlashCardController'
import Review from './components/Review'

//Want to test each active question set twice.
//Each question set must be at least 12 correct
//if not correct, restart phase
//if correct, move to new phase.
interface progress {
  correct: number
  attempts: number
}

export interface repTrackingObject {
  [key: number]: progress
}



function App() {
  const [page, setPage] = useState('flash')
  const [phase, setPhase] = useState(0) // stepped progress, 1 through 7
  const [phaseList, setPhaseList] = useState() // list of protocols included in this phase of test.
  const [reps, setReps] = useState<repTrackingObject>({}) //target count before check. Use Custom hook to check.

  useSetup(setPhase, setReps) //run once on load. Setup local storage
  usePhase(phase, setPhaseList) // on phase change, generate new random list of flashcards.
  checkReps(setPage, reps, phase, phaseList) //if reps are equal to desired count, redirect to progress report. If all checks pass, update phase.


  return (
    <div className="App">
      {page === 'flash' && phaseList !== (null || undefined) && phase > 0 ?
        <FlashCardController
          phaseList={phaseList}
          reps={reps}
          setReps={setReps}
        /> :
        <></>
      }
      {/* ------------------------ */}
      {page === 'review' && phaseList !== (null || undefined) && phase > 0 ?
        <Review
          reps={reps}
          setPage={setPage}
        /> :
        <></>
      }

    </div>
  )
}

export default App