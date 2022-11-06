import * as React from "react";
import { useEffect, useState } from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "VulnerabilityID",
    headerName: "VulnerabilityID",
    width: 170,
  },
  {
    field: "Severity",
    headerName: "Severity",
    minWidth: 100,
    renderCell: (params) => {
      return <div>{params.row.Severity}</div>;
    },
  },
  {
    field: "PkgName",
    headerName: "PkgName",
    minWidth: 100,
  },
  {
    field: "InstalledVersion",
    headerName: "InstalledVersion",
    minWidth: 150,
  },
  {
    field: "Description",
    headerName: "Description",
    minWidth: 200,
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
        rowHeight={60}
        rows={scanResult}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
}
