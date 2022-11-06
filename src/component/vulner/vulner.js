/* eslint-disable */

import CveTable from "./cveTable";
import ContainerTable from "./containerTable";
import * as React from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";
import { useEffect, useState } from "react";

export default function Vulnerability() {
  let [QueueList, setQueueList] = useState([]);
  let [scanList, setScanList] = useState([]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    VulnerServiceController.scanQueueList()
      .then(() => {
        setQueueList(QueueList);
        const btnElement = document.getElementsByClassName("scanBtn");
        for (var i = 0; i < btnElement.length; i++) {
          for (var j = 0; j < QueueList.length; j++) {
            if (btnElement[i].id == QueueList[j].imageId) {
              btnElement[i].innerText = "Scanning";
              btnElement[i].color = "success";
            }
          }
          if (
            btnElement[i].innerText === "SCANNING" &&
            QueueList.length === 0
          ) {
            btnElement[i].innerText = "complete";
            btnElement[i].color = "warning";
            btnElement[i].onclick = "location.reload()";
          }
        }
      })
      .catch((err) => console.log(err));

    const timer = setInterval(() => {
      setCount(count + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [count]);

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
            <button
              type="button"
              id={"btn"}
              className="btn btn-success"
              onClick={() => {
                VulnerServiceController.scanImage();
                const btn = document.getElementById("btn");
                btn.innerText = "Scanning...";
                //  btn color change
                btn.style.backgroundColor = "gray";
              }}
            >
              scan
            </button>
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
