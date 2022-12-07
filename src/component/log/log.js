import DataTable from "./dataTable";

export default function Log() {
  return (
    <div className="AppSetting">
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">Log</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <a href="/log">Log</a>
                      </li>
                    </ol>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div style={{ margin: 20 }}>
              <DataTable></DataTable>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
