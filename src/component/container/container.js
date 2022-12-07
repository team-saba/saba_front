import Table from "./table";
import { useEffect } from "react";

export default function Container() {
  useEffect(() => {
    if (!localStorage.getItem("trivy")) {
      localStorage.setItem("trivy", JSON.stringify("true"));
    }
    if (!localStorage.getItem("clair")) {
      localStorage.setItem("clair", JSON.stringify("false"));
    }
  }, []);

  return (
    <div className="AppSetting">
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">container</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <a href="/container">container</a>
                      </li>
                      <li class="breadcrumb-item active">container v3</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Table></Table>
          </div>
        </div>
      </body>
    </div>
  );
}
