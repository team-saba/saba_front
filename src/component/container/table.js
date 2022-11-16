/* eslint-disable */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";
import { useEffect, useState } from "react";
import { DockerServiceController } from "../../controller/docker_controller";
import CustomizedTooltips from "../security/containerTooltip";
import Tooltips from "./tooltip";

export default function Table() {
  const params = new URLSearchParams(window.location.search);
  const imageId = params.get("remote");

  let [containers, setContainers] = useState([]);
  let [container_id, setContainerId] = useState();
  let [new_name, setNewName] = useState();
  const style = { color: "green" };

  function getContainer() {
    DockerServiceController.container()
      .then(({ containers }) => {
        setContainers(containers);
      })
      .catch((err) => console.log(err));
  }

  if (imageId === "remote") {
    return remoteTable();
  } else {
    useEffect(() => {
      getContainer();
    }, []);

    const columns = [
      { field: "Name", headerName: "name", width: 250 },
      { field: "Status", headerName: "state", width: 250 },
      { field: "Stack", headerName: "stack", width: 250 },
      {
        field: "CONTAINER_ID",
        headerName: "image",
        width: 250,
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
      { field: "Port", headerName: "Published Ports Ownership", width: 250 },
    ];

    return (
      <div
        style={{
          height: 800,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Tooltips></Tooltips>
        <DataGrid
          rowHeight={80}
          rows={containers}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row.CONTAINER_ID}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
}
