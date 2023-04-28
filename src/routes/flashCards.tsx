
import FlashCardController from '../components/FlashCardController'
import Button from '@mui/material/Button';
import { useFlashCardProgress, appContext } from '../hooks/AppContext'
import useCheckReps from '../hooks/useCheckReps'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

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

  if (c?.phaseList !== (null || undefined)) {
    return (
      <Stack spacing={3}>
        <Typography variant='h6'>
          Comptia Security+ sy0-601  Ports and Protocols Flashcards
        </Typography>
        <FlashCardController
          phase={c.phase}
          phaseList={c.phaseList}
          reps={c.reps}
          setReps={c.setReps}
        />
        <Button onClick={() => routeChange(`/`)}>
          Return to Welcome Page
        </Button>
      </Stack>)
  } else {
    return (
      <Button onClick={() => routeChange(`/`)}>
        Return to Welcome Page
      </Button>
    )
  }
}
