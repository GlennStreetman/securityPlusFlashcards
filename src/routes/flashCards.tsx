import FlashCardController from '../components/FlashCardController'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useFlashCardProgress, appContext } from '../hooks/AppContext'
import useCheckReps from '../hooks/useCheckReps'

interface progress {
  correct: number
  attempts: number
}

export interface repTrackingObject {
  [key: number]: progress
}

export default function FlashCards() {

  const c: appContext = useFlashCardProgress()

  let navigate = useNavigate();
  const routeChange = (e: string) => {
    let path = e;
    navigate(path);
  }
  //if reps are equal to desired count, redirect to progress report. If all checks pass, update phase.
  useCheckReps(c.reps, c.phaseList, () => routeChange('/progress'))

  if (c?.phaseList !== (null || undefined) && c.phase > 0) {
    return (<FlashCardController
      phase={c.phase}
      phaseList={c.phaseList}
      reps={c.reps}
      setReps={c.setReps}
    />)
  } else {
    return (
      <Button onClick={() => routeChange(`/Welcome`)}>
        Return to Welcome Page
      </Button>
    )
  }
}
