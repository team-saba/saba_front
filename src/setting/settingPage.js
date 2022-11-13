import SettignList from "./settingList";
import { Grid } from "@mui/material";

export default function SettingPage() {
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
                    <h1>
                      <strong>container</strong>
                    </h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item"></li>
                      <li class="breadcrumb-item active">container v3</li>
                    </ol>
                  </div>
                </div>
                <br />
                <Grid>
                  <SettignList></SettignList>
                </Grid>
              </div>
            </div>
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
