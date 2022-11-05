import { containerHeader } from "../Header";

import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";

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

function check(verified) {
  if (verified === true) {
    return (
      <IconButton aria-label="verified">
        <VerifiedUserIcon style={{ color: "green" }} />
      </IconButton>
    );
  } else {
    return (
      <IconButton aria-label="not verified">
        <VerifiedUserIcon style={{ color: "red" }} />
      </IconButton>
    );
  }
}

function createData(
  id: string,
  updateDate: string,
  verified: boolean,
  vulnerability: boolean
) {
  return { id, updateDate, verified, vulnerability };
}

const rows = [
  createData("이미지ID/컨테이너ID", "2022-09-25,13:55:21", true, false),
  createData("이미지ID/컨테이너ID", "2022-09-25,13:55:21", false, true),
  createData("이미지ID/컨테이너ID", "2022-09-25,13:55:21", false, false),
  createData("이미지ID/컨테이너ID", "2022-09-25,13:55:21", true, false),
];

export default function AppImage() {
  const [signing, signingSet] = React.useState(false);
  const signingOpen = () => signingSet(true);
  const signingClose = () => signingSet(false);

  const [vuln, vulnSet] = React.useState(false);
  const vulnOpen = () => vulnSet(true);
  const vulnClose = () => vulnSet(false);

  const buttons = [
    <Button variant="contained" onClick={signingOpen}>
      image Signing
    </Button>,
    <Button variant="contained" onClick={vulnOpen} color={"warning"}>
      check vulnerability
    </Button>,
  ];

  return (
    <div className="AppSetting">
      <containerHeader></containerHeader>
      <body>
        <div class="wrapper">
          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">signingKeys</h1>
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

            <div className="content">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">id</TableCell>
                      <TableCell align="center">updateDate&nbsp;</TableCell>
                      <TableCell align="center">verified&nbsp;</TableCell>
                      <TableCell align="center">vulnerability&nbsp;</TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.updateDate}</TableCell>
                        <TableCell align="center">
                          {check(row.verified)}
                        </TableCell>
                        <TableCell align="center">
                          {check(row.vulnerability)}
                        </TableCell>
                        <TableCell align="center">
                          <ButtonGroup
                            orientation="vertical"
                            aria-label="vertical outlined button group"
                          >
                            {buttons}
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
        open={signing}
        onClose={signingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            image Signing
            <Button
              variant="contained"
              onClick={signingClose}
              style={{ float: "right" }}
            >
              Signing
            </Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>cosign.key</option>
                <option>cosign2.key</option>
                <option>cosign3.key</option>
              </select>
            </div>
            <b>Log</b>
            <br />
            <textarea class="form-control" id="Textarea1" rows={3}></textarea>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={vuln}
        onClose={vulnClose}
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
