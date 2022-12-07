import React from "react";
import IamgeTable from "./table";

export default function AppImage() {
  return (
    <div className="AppSetting">
      <body>
        <div class="wrapper">
          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">Images</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <a href="src/component/images/appImage#">Home</a>
                      </li>
                      <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <IamgeTable></IamgeTable>
          </div>
        </div>
      </body>
    </div>
  );
}
