/* eslint-disable */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";
import { useEffect, useState } from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";

const columns = [
  {
    field: "Name",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      if (params.row.vulnerability != null) {
        return (
          // href /cve/{params.row.vulnerability}
          <a href={"/cve/?imageId=" + params.row.Name}>{params.row.Name}</a>
        );
      }
    },
  },
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
    field: "vulnerability",
    headerName: "vulnerability",
    width: 100,
    renderCell: (params) => {
      if (params.value == null) {
        return (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              VulnerServiceController.scanImage(params.row.Name);
            }}
          >
            scan
          </Button>
        );
      } else {
        return (
          <IconButton
            aria-label="verified"
            onClick={() => {
              alert("스캔 기능 넣을 예정\n*무지성 클릭 방지");
            }}
          >
            <VerifiedUserIcon style={{ color: "red" }} />
          </IconButton>
        );
      }
    },
  },
  {
    field: "vulner",
    headerName: "vulner",
    width: 500,
    renderCell: (params) => {
      if (params.row.vulnerability != null) {
        //vulnerability scan_result[i] Severity count
        var scan_result = params.row.vulnerability["scan_result"];
        var Critical = 0;
        var High = 0;
        var Medium = 0;
        var Low = 0;
        var Unknown = 0;
        for (var i = 0; i < scan_result.length; i++) {
          if (scan_result[i].Severity == "CRITICAL") {
            Critical++;
          } else if (scan_result[i].Severity == "HIGH") {
            High++;
          } else if (scan_result[i].Severity == "MEDIUM") {
            Medium++;
          } else if (scan_result[i].Severity == "LOW") {
            Low++;
          } else if (scan_result[i].Severity == "UNKNOWN") {
            Unknown++;
          }
        }
        return (
          <Stack direction="row" spacing={2}>
            <Button size="small" color="error" variant="contained">
              Critical {Critical}
            </Button>
            <Button size="small" color="warning" variant="contained">
              High {High}
            </Button>
            <Button size="small" color="success" variant="contained">
              Medium {Medium}
            </Button>
            <Button size="small" color="primary" variant="contained">
              Low {Low}
            </Button>
            <Button size="small" color="inherit" variant="contained">
              ETC {Unknown}
            </Button>
          </Stack>
        );
      }
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
    field: "scan_date",
    headerName: "scan_date",
    width: 150,
    renderCell: (params) => {
      return <div>{params.formattedValue}</div>;
    },
  },
];

export default function ContainerTable() {
  let [scanList, setScanList] = useState([]);

  useEffect(() => {
    VulnerServiceController.scanList()
      .then(({ scanList }) => {
        setScanList(scanList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ height: 950, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rowHeight={80}
        rows={scanList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
}
