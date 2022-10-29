/* eslint-disable */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
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

function createData(CVE_number, Package, Security, Description) {
  return { CVE_number, Package, Security, Description };
}

const rows = [
  createData('CVE-2022-15505', 'linux:4.19.67- 2+dev 10u2', 'Critical', 'drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)'),
  createData('CVE-2022-15505', 'linux:4.19.67- 2+dev 10u2', 'Critical', 'drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)'),
 ];


export default function CveTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CVE_number</StyledTableCell>
            <StyledTableCell align="right">Package</StyledTableCell>
            <StyledTableCell align="right">Security</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.CVE_number}>
              <StyledTableCell component="th" scope="row">
                {row.CVE_number}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Package}</StyledTableCell>
              <StyledTableCell align="right">{row.Security}</StyledTableCell>
              <StyledTableCell align="left">{row.Description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
