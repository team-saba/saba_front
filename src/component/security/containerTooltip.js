/* eslint-disable */
import * as React from 'react';
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

export default function CustomizedTooltips() {
  const [open, openSet] = React.useState(false);
  const keyOpen = () => openSet(true);

  return (
    <Grid container justifyContent="right" alignItems="center" spacing={2}>
      <Grid item>
        <Tooltip title="generate" placement="right">
          <Button variant="contained" id={"keymodal"} onClick={keyOpen}>Generate</Button>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="delete" placement="right-start">
          <Button variant="contained" color={"secondary"}>Delete</Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

