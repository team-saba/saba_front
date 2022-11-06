import { containerHeader } from "../Header";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { SigningServiceController } from "../../controller/signing_controller";
import TextField from "@mui/material/TextField";

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
  const [id, setId] = React.useState();
  const [pw, setPw] = React.useState();
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
              <Button variant="contained" id={"keymodal"} onClick={keyOpen}>
                Login
              </Button>

              <Button
                variant="contained"
                id={"keymodal"}
                onClick={() => {
                  SigningServiceController.logout();
                }}
              >
                Logout
              </Button>
              <Button
                variant="contained"
                id={"keymodal"}
                onClick={() => {
                  SigningServiceController.checkLogin();
                }}
              >
                LoginCheck
              </Button>
              <Button
                variant="contained"
                id={"keymodal"}
                onClick={() => {
                  SigningServiceController.checkLoginId("cpplovelove");
                }}
              >
                LoginIdCheck
              </Button>
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
            Login to dockerHub
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Login
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={(newValue) => setId(newValue.target.value)}
            />
            pw
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={(newValue) => setPw(newValue.target.value)}
            />
            <Button
              variant="contained"
              id={"keymodal"}
              onClick={() => {
                SigningServiceController.login(id, pw);
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              id={"keymodal"}
              onClick={keyClose}
              color="error"
            >
              close
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
