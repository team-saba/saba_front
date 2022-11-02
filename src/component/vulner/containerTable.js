/* eslint-disable */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconButton } from "@mui/material";
import {VerifiedUserIcon} from "../element"


const columns = [
  { field: 'name', headerName: 'name', width: 150 },
  { field: 'tag', headerName: 'tag', width: 100 },
  { field: 'status', headerName: 'status', width: 120,
      renderCell: (params) => {
        console.log(params.formattedValue)
        if(params.formattedValue=='running'){
          return(
            <Button
              size="small"
              variant="contained"
              color="primary">running
           </Button> 
          );
        }
        else{
          return(
            <Button
              size="small"
              variant="contained"
              color="warning">exited
           </Button> 
          );
        }
      }
  },
  { field: 'vulner', headerName: 'vulner', width: 470,
      renderCell: (params) => {
        console.log(params.formattedValue)
        return(
          <Stack direction="row" spacing={2}>
            <Button size="small" color="error" variant="contained">Critical</Button>
            <Button size="small" color="warning" variant="contained">High</Button>
            <Button size="small" color="success" variant="contained">Medium</Button>
            <Button size="small" color="primary" variant="contained">Low</Button>
            <Button size="small" color="inherit" variant="contained">undefined</Button>
          </Stack>
        );
    }
   },
  { field: 'totalCount', headerName: 'totalCount', width: 100 },
  { field: 'startTime', headerName: 'startTime', width: 100 },
  { field: 'runningTime', headerName: 'runningTime', width: 100 },
  { field: 'createDate', headerName: 'createDate', width: 100 },
  { field: 'isSigned', headerName: 'isSigned', width: 100,
    renderCell: (params) => {
          if( params.formattedValue == 'true' ){
            return(
              <IconButton aria-label="verified">
              <VerifiedUserIcon style={{ color: "green" }} />
              </IconButton>
            )
          }else{
            return(
              <IconButton aria-label="verified">
              <VerifiedUserIcon style={{ color: "red" }} />
              </IconButton>
            )
          }
    } 
  },
];

const rows = [
  { id: 1, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'exited', vulner: 'false',totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'true'},
  { id: 2, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false',totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21',  isSigned: 'false' },
  { id: 3, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false',totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21',  isSigned: 'false' },
  { id: 4, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'true' },
  { id: 5, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'false' },
  { id: 6, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'false' },
  { id: 7, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'true' },
  { id: 8, name: '이미지ID/컨테이너ID', tag: 'latest', status: 'running', vulner: 'false', totalCount:'30 total', startTime:'2022-09-25 13:55:21',runningTime:'00:05 :21',createDate:'2022-09-25 13:55:21', isSigned: 'true' },
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
