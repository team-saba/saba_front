/* eslint-disable */

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'name', width: 150 },
  { field: 'tag', headerName: 'tag', width: 150 },
  { field: 'status', headerName: 'status', width: 150 },
  { field: 'vulner', headerName: 'vulner', width: 150 },
  { field: 'isSigned', headerName: 'isSigned', width: 150 },
];

const rows = [
  { id: 1, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
<<<<<<< HEAD
=======
  { id: 2, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 3, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 4, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 5, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 6, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 7, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
  { id: 8, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', isSigned: 'true' },
>>>>>>> main
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
