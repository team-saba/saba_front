/* eslint-disable */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(containerId, createDate, updateDate, log) {
  return { containerId, createDate, updateDate, log };
}

const rows = [
  createData('/back_test', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "GET /container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6 HTTP/1.1" 200 OK'),
  createData('/portainer', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "INFO:uvicorn.error:Started server process [9]'),
  createData('/test1', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "GET /container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6 HTTP/1.1" 200 OK'),
  createData('/test1', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "WARNING:root:토큰을 확인하세요: 8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6'),
  createData('/back_test', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "INFO:uvicorn.error:Started server process [9]'),
  createData('/back_test', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "INFO:uvicorn.error:Waiting for application startup.'),
  createData('/back_test', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "ERROR:root:토큰을 확인하세요: 8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6'),
  createData('/back_test', '2022-09-25 13:55:21','2022-09-25 13:55:21', 'INFO:     100.124.51.12:45508 - "GET /container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6 HTTP/1.1" 200 OK'),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ContainerId</TableCell>
            <TableCell align="right">createDate</TableCell>
            <TableCell align="right">updateDate</TableCell>
            <TableCell align="left">log</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              //key={row.name}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.containerId}</TableCell>
              <TableCell align="left">{row.createDate}</TableCell>
              <TableCell align="left">{row.updateDate}</TableCell>
              <TableCell align="left">{row.log}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
