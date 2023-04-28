
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import PortsProtocolsTable from '../components/PortsProtocolsTable';
import CardSelection from '../components/CardSelection';

import { useFlashCardProgress, appContext } from '../hooks/AppContext'

export default function Welcome() {

  const c: appContext = useFlashCardProgress()

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `flashCards`;
    navigate(path);
  }

  return (
    <div className="App">
      <Stack>
        <Typography variant="h5">
          Comptia Security+ sy0-601  Ports and Protocols Flashcards
        </Typography>
        <Typography variant="body1">
          These flashcards are designed to help you memorize ports and protocols for the sy0-601 test.
        </Typography>
        <Typography variant="body1">
          Each phase consists of a group of 7 protocols.<br />
        </Typography>
        <Typography variant="body1">
          If you finish a phase with an 85% grade, you will progress to the next phase.<br />
        </Typography>
        <Typography variant="body1">
          Each new phase adds 7 new ports & protocols to learn<br />
        </Typography>
        <Typography variant="body1">
          Work through all five phases and you should know your ports/protocols for the test.
        </Typography>
        <Button onClick={routeChange}>
          Get Started
        </Button>
        {c.phase ? <CardSelection phase={c.phase} setPhase={c.setPhase} /> : <></>}
        <Card>
          <PortsProtocolsTable />
        </Card>
      </Stack>
    </div>
  );
}
