/* eslint-disable */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";
import { useEffect, useState } from "react";
import { DockerServiceController } from "../../controller/docker_controller";

const columns = [
  { field: "Name", headerName: "Name", width: 250 },
  {
    field: "Used",
    headerName: "Used",
    width: 100,
    renderCell: (params) => {
      if (params.formattedValue === "True") {
        return (
          <Button size="small" variant="contained" color="primary">
            Used
          </Button>
        );
      } else {
        return (
          <Button size="small" variant="contained" color="warning">
            Unused
          </Button>
        );
      }
    },
  },
  {
    field: "RepoTags",
    headerName: "RepoTags",
    width: 200,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1}>
          {params.value.map((tag) => (
            <div key={tag} style={{ fontSize: "12px" }}>
              {tag + "\n"}
            </div>
          ))}
        </Stack>
      );
    },
  },
  {
    field: "Size",
    headerName: "Size",
    width: 100,
    renderCell: (params) => {
      return (
        //  653899526 to 653.899526 MB
        <div>{(params.formattedValue / 1000000).toFixed(2)} MB</div>
      );
    },
  },
  {
    field: "Created",
    headerName: "Created",
    width: 150,
    renderCell: (params) => {
      return (
        //  time format
        <div>{new Date(params.formattedValue).toLocaleString()}</div>
      );
    },
  },
  {
    field: "isSigned",
    headerName: "isSigned",
    width: 100,
    renderCell: (params) => {
      if (params.formattedValue == "true") {
        return (
          <IconButton aria-label="verified">
            <VerifiedUserIcon style={{ color: "green" }} />
          </IconButton>
        );
      } else {
        return (
          <IconButton aria-label="verified">
            <VerifiedUserIcon style={{ color: "red" }} />
          </IconButton>
        );
      }
    },
  },
  {
    field: "check",
    headerName: "check",
    width: 470,
    renderCell: (params) => {
      return (
        <Stack direction="column" spacing={1}>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => {}}
          >
            image Signing
          </Button>
          <Button
            size="small"
            color="warning"
            variant="contained"
            onClick={() => {
              //modal open
              alert("modal open");
              DockerServiceController.scan(params.row.Name);
            }}
          >
            check vulnerability
          </Button>
        </Stack>
      );
    },
  },
];

export default function iamgeTable() {
  let [images, setImages] = useState([]);

  useEffect(() => {
    DockerServiceController.image()
      .then(({ images }) => {
        setImages(images);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ height: 800, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rowHeight={80}
        rows={images}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
