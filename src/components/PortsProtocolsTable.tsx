import { layer7Protocols } from '../data/protocol'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function numbersToString(el: number[]) {
    let numberString = el.reduce((prev, curr) => {
        return `${prev}${curr}, `
    }, '')
    return numberString
}

function mapProtocols() {
    const rows = layer7Protocols.map((el) => <TableRow>
        <TableCell align="center">{el.phase}</TableCell>
        <TableCell align="center">{el.l7}</TableCell>
        <TableCell align="center">{numbersToString(el.portList).slice(0, -2)}</TableCell>
        <TableCell align="center">{el.l4}</TableCell>
    </TableRow>)
    return rows
}

function PortsProtocolsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Phase</TableCell>
                        <TableCell align="center">Layer 7</TableCell>
                        <TableCell align="center">Port List</TableCell>
                        <TableCell align="center">Layer 4</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mapProtocols()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PortsProtocolsTable