import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import { DockerServiceController } from "../../controller/docker_controller";

export default function Tooltips(props) {
  const { container_id, getContainer } = props;

  return (
    <Grid container justifyContent="right" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Tooltip title="generate" placement="right">
          <div class="btn-group" role="group" aria-label="Action">
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-success"
              onClick={async () => {
                let result = await DockerServiceController.start(container_id);
                if (result) getContainer();
              }}
            >
              start
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-warning"
              onClick={async () => {
                let result = await DockerServiceController.stop(container_id);
                if (result) getContainer();
              }}
            >
              stop
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-primary"
              onClick={async () => {
                let result = await DockerServiceController.restart(
                  container_id
                );
                if (result) getContainer();
              }}
            >
              restart
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-danger"
              onClick={async () => {
                let result = await DockerServiceController.remove(container_id);
                if (result) getContainer();
              }}
            >
              remove
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-primary"
              onClick={async () => {
                let result = await DockerServiceController.kill(container_id);
                if (result) getContainer();
              }}
            >
              kill
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-primary"
              onClick={async () => {
                let result = await DockerServiceController.pause(container_id);
                if (result) getContainer();
              }}
            >
              pause
            </button>
            <button
              style={{ margin: "3px" }}
              type="button"
              class="btn btn-primary"
              onClick={async () => {
                let result = await DockerServiceController.resume(container_id);
                if (result) getContainer();
              }}
            >
              resume
            </button>
          </div>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
