/* eslint-disable */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'name', headerName: 'name', width: 70 },
  { field: 'tag', headerName: 'tag', width: 30 },
  { field: 'status', headerName: 'status', width: 30 },
  { field: 'vulner', headerName: 'vulner', width: 30 },
  { field: 'isSigned', headerName: 'isSigned', width: 30 },
];

const rows = [
  // { name: 2, tag: 'Lannister', status: 'Cersei', vulner: 42},
];


export default function ContainerTable() {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor:'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
