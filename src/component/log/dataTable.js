import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const columns = [
  { id: 'containerId', label: 'containerId', minWidth: 170 },
  { id: 'createDate', label: 'createDate', minWidth: 100 },
  { id: 'updateDate', label: 'updateDate', minWidth: 100 },
  { id: 'log', label: 'log', minWidth: 100 },
]


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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '98%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 570 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
