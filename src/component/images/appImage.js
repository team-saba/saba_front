/* eslint-disable */
import { containerHeader } from "../Header";

import React from "react";

import IamgeTable from "./table";

export default function AppImage() {
  const [signing, signingSet] = React.useState(false);
  const signingOpen = () => signingSet(true);
  const signingClose = () => signingSet(false);

  const [vuln, vulnSet] = React.useState(false);
  const vulnOpen = () => vulnSet(true);
  const vulnClose = () => vulnSet(false);

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
            <IamgeTable></IamgeTable>
          </div>
        </div>
      </body>

      {/*<Modal*/}
      {/*  open={signing}*/}
      {/*  onClose={signingClose}*/}
      {/*  aria-labelledby="modal-modal-title"*/}
      {/*  aria-describedby="modal-modal-description"*/}
      {/*>*/}
      {/*  <Box sx={style}>*/}
      {/*    <Typography id="modal-modal-title" variant="h6" component="h2">*/}
      {/*      image Signing*/}
      {/*      <Button*/}
      {/*        variant="contained"*/}
      {/*        onClick={signingClose}*/}
      {/*        style={{ float: "right" }}*/}
      {/*      >*/}
      {/*        Signing*/}
      {/*      </Button>*/}
      {/*    </Typography>*/}
      {/*    <Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
      {/*      <div className="form-group">*/}
      {/*        <select className="form-control" id="exampleFormControlSelect1">*/}
      {/*          <option>cosign.key</option>*/}
      {/*          <option>cosign2.key</option>*/}
      {/*          <option>cosign3.key</option>*/}
      {/*        </select>*/}
      {/*      </div>*/}
      {/*      <b>Log</b>*/}
      {/*      <br />*/}
      {/*      <textarea class="form-control" id="Textarea1" rows={3}></textarea>*/}
      {/*    </Typography>*/}
      {/*  </Box>*/}
      {/*</Modal>*/}
    </div>
  );
}
