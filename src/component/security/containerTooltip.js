/* eslint-disable */
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { SigningServiceController } from "../../controller/signing_controller";

export default function CustomizedTooltips() {
  const [pw, setPw] = React.useState();

  return (
    <Grid container justifyContent="right" alignItems="center" spacing={2}>
      <Grid item>
        pw
        <TextField
          size="small"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(newValue) => setPw(newValue.target.value)}
        />
        <Tooltip title="generate" placement="right">
          <Button
            variant="contained"
            id={"keymodal"}
            onClick={() => {
              SigningServiceController.keyGen(pw);
            }}
          >
            Generate
          </Button>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="delete" placement="right-start">
          <Button
            variant="contained"
            color={"secondary"}
            onClick={() => {
              SigningServiceController.keyDel(pw);
            }}
          >
            Delete
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
