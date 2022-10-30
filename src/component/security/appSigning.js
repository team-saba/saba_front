import { containerHeader } from "../Header";

import React from "react";
import ContainerTable from "./containerTable";
import CustomizedTooltips from "./containerTooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AppSigning() {
  const [open, openSet] = React.useState(false);
  const keyOpen = () => openSet(true);
  const keyClose = () => openSet(false);
  return (
    <div className="AppSetting">
      <containerHeader></containerHeader>
      <body>
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">analysis</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="src/component/images/appImage#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <CustomizedTooltips />
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
      <Modal
        open={open}
        onClose={keyClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            check vulnerability
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            취약점 검사 이다아아아아
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
