import Review from '../components/Review'
import { useFlashCardProgress, appContext } from '../hooks/AppContext'

function ReviewProgress() {

    const c: appContext = useFlashCardProgress()

    return (
        <Review reps={c.reps} setReps={c.setReps} phase={c.phase} setPhase={c.setPhase} />
    )
}

export default ReviewProgress