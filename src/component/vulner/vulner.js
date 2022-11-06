/* eslint-disable */

import CveTable from "./cveTable";
import ContainerTable from "./containerTable";
import * as React from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";

export default function Vulnerability() {
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
                    <h1 class="m-0">Vulnerability</h1>
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
            {/*<button*/}
            {/*  type="button"*/}
            {/*  className="btn btn-success"*/}
            {/*  onClick={() => {*/}
            {/*    VulnerServiceController.scanImage();*/}
            {/*  }}*/}
            {/*>*/}
            {/*  scan*/}
            {/*</button>*/}
            <ContainerTable></ContainerTable>
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
