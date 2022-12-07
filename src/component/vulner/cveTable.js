import * as React from "react";
import { useEffect, useState } from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "cveid",
    headerName: "cveid",
    width: 170,
  },
  {
    field: "severity",
    headerName: "severity",
    minWidth: 100,
    renderCell: (params) => {
      return <div>{params.row.severity}</div>;
    },
  },
  {
    field: "packageName",
    headerName: "packageName",
    minWidth: 100,
  },
  {
    field: "packageInstalled",
    headerName: "packageInstalled",
    minWidth: 150,
  },
  {
    field: "packageFixedIn",
    headerName: "packageFixedIn",
    minWidth: 150,
  },
  {
    field: "description",
    headerName: "description",
    minWidth: 200,
  },
  {
    field: "engine",
    headerName: "engine",
    minWidth: 100,
  },
];

export default function CveTable() {
  const params = new URLSearchParams(window.location.search);
  const imageId = params.get("imageId");

  let [scanResult, setScanResult] = useState([]);
  useEffect(() => {
    VulnerServiceController.scanResult(imageId)
      .then(({ scanResult }) => {
        setScanResult(scanResult);
      })
      .catch((err) => console.log(err));
  }, []);

  for (let i = 0; i < scanResult.length; i++) {
    scanResult[i].id = i;
  }

  return (
    <div style={{ height: 600, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rowHeight={40}
        rows={scanResult}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        disableSelectionOnClick
      />
    </div>
  );
}
