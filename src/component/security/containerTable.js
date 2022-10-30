/* eslint-disable */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

const columns = [
  { field: 'name', headerName: 'name', width: 150 },
  { field: 'createtime' , headerName: 'create', width: 150 },
  { field: 'updatetime', headerName: 'update', width: 150 },
  { field: 'description', headerName: 'description', width: 350 },
];

const rows = [
  { id: 1, name: 'temp.key', createtime: '2021-08-01', updatetime: '2021-08-01', description: '아아아아아아아아아아아아아아아' },
  { id: 2, name: 'temp2.key', createtime: '2021-08-01', updatetime: '2021-08-01', description: 'test' },
  { id: 3, name: 'cosign.key', createtime: '2021-08-01', updatetime: '2021-08-01', description: 'test' },
  { id: 4, name: 'cosign2.key', createtime: '2021-08-01', updatetime: '2021-08-01', description: 'test' }
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
