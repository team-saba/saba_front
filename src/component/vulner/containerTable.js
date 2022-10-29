import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(Name,Tag,Status,Critical, high, medium, low ,unknown ,TotalCount, StartTime, RunningTime ,isSigned) {
//   return { Name,Tag,Status,Critical, high, medium, low ,unknown ,TotalCount, StartTime, RunningTime ,isSigned };
// }
function createData(Name,Tag,Status) {
  return { Name,Tag,Status};
}



const rows = [
  createData('saba_dev', 'notSigned', ''),
];

export default function ContainerTable() {
const status =(
    <Stack spacing={0.5} direction="row">
      <Button variant="contained">high</Button>
      <Button variant="contained">medium</Button>
      <Button variant="contained">low</Button>
    </Stack>
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Tag}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}{status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
