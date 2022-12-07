import ContainerTable from "./containerTable";
import * as React from "react";

export default function Vulnerability() {
  return (
    <div className="AppSetting">
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
            <ContainerTable></ContainerTable>
          </div>
        </div>
      </body>
    </div>
  );
}
