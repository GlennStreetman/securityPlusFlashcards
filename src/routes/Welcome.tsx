
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

  async function testAPI() {
    let body = {
      email: 'test3@gmail.com',
      github: 'test3@github.com',
    }
    let bodyparse = JSON.stringify(body)
    const response = await fetch('https://pya66lzf6f2vwkbv7uyvfyfc4i0rjolv.lambda-url.us-east-1.on.aws/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // "Acess-Control-Allow-Origin": "*"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: bodyparse, // body data type must match "Content-Type" header
    });
    const msg = await response.json()
    console.log("msg", msg)
  }

  return (
    <div className="App">
      <Stack>
        <Button onClick={testAPI}>TEST CLICK</Button>
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
