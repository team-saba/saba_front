/* eslint-disable */
import CveTable from "./cveTable";
import PieChart from "./pieChart";
import ContainerTable from "./containerTable";

const cve_style = {
  position: "absolute",
  width: 600,
  height: 200,
  bgcolor: "background.paper",
  transform: "translate(10%, -20%)",
};

const chart_style = {
  position: "absolute",
  bgcolor: "background.paper",
  transform: "translate(150%,-5%)",
};

const container_style = {
  width: 1400,
  height: 400,
  position: "absolute",
  bgcolor: "background.paper",
  transform: "translate(5%, 70%)",
};

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
                      <li class="breadcrumb-item">
                        <a href="#">Vulnerability</a>
                      </li>
                    </ol>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div class="table_top" style={cve_style}>
              <strong>SabaDev</strong>
              &nbsp;&nbsp;Vulnerability
              <CveTable></CveTable>
            </div>
            <div class="pie_chart" style={chart_style}>
              <PieChart></PieChart>
            </div>
            <div className="container_table" style={container_style}>
              <ContainerTable></ContainerTable>
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
