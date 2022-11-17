/* eslint-disable */

import CveTable from "./cveTable";
import PieChart from "./pieChart";
import * as React from "react";

export default function AppCve() {
  // 파라미터값 가져오기
  const params = new URLSearchParams(window.location.search);
  const imageId = params.get("imageId");

  const data = JSON.parse(localStorage.getItem("test"));
  const {
    vulnerability: { scan_result: resultList },
  } = data;

  let severity = [
    { id: "LOW", value: 0 },
    { id: "MEDIUM", value: 0 },
    { id: "HIGH", value: 0 },
    { id: "CRITICAL", value: 0 },
  ];

  for (let index in resultList) {
    switch (resultList[index].Severity) {
      case "LOW":
        severity[0].value++;
        break;
      case "MEDIUM":
        severity[1].value++;
        break;
      case "HIGH":
        severity[2].value++;
        break;
      case "CRITICAL":
        severity[3].value++;
        break;
    }
  }

  return (
    <div className="AppSetting">
      <containerHeader></containerHeader>
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">Scan Report</h1>
                    <h6 class="m-0">Image ID : {imageId}</h6>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item"></li>
                    </ol>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <PieChart severity={severity}></PieChart>
            <CveTable></CveTable>
          </div>
        </div>

        <script src="plugins/jquery/jquery.min.js"></script>
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="dist/js/adminlte.js"></script>

        <script src="plugins/chart.js/Chart.min.js"></script>
        <script src="dist/js/demo.js"></script>
        <script src="dist/js/pages/dashboard3.js"></script>
      </body>
    </div>
  );
}
