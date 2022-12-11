import { useEffect, useState } from "react";
import { DockerServiceController } from "../../controller/docker_controller";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Tooltips from "./tooltip";

export default function remoteTable() {
  let [containers, setContainers] = useState([]);
  const [selectionModel, setSelectionModel] = useState();
  const style = { color: "green" };

  function getContainer() {
    DockerServiceController.remoteContainer()
      .then(({ containers }) => {
        setContainers(containers);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getContainer();
  }, []);

  const columns = [
    {
      field: "Name",
      headerName: "name",
      width: 250,
      renderCell: (params) => {
        return <div>{params.formattedValue.replace("/", "")}</div>;
      },
    },
    {
      field: "Status",
      headerName: "state",
      width: 250,
      renderCell: (params) => {
        if (params.formattedValue === "running") {
          return (
            <Button size="small" variant="contained" color="primary">
              running
            </Button>
          );
        } else {
          return (
            <Button size="small" variant="contained" color="warning">
              {params.formattedValue}
            </Button>
          );
        }
      },
    },

    { field: "Stack", headerName: "stack", width: 250 },
    {
      field: "Image",
      headerName: "image",
      width: 250,
      renderCell: (params) => {
        return <div>{params.formattedValue.slice(0, 12)}</div>;
      },
    },
    {
      field: "Created Time",
      headerName: "created",
      width: 250,
      renderCell: (params) => {
        return <div>{new Date(params.formattedValue).toLocaleString()}</div>;
      },
    },
    { field: "IPAddress", headerName: "IP Address", width: 250 },
    {
      field: "Port",
      headerName: "Published Ports Ownership",
      width: 250,
      renderCell: (params) => {
        return <div>{Object.keys(params.formattedValue)}</div>;
      },
    },
  ];

  return (
    <div
      style={{
        height: 650,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Tooltips
        container_id={selectionModel}
        getContainer={getContainer}
      ></Tooltips>

      <DataGrid
        rowHeight={60}
        rows={containers}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.CONTAINER_ID}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          const temp = newSelectionModel.pop();
          setSelectionModel(temp);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
}
