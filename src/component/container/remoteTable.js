import { useEffect } from "react";
import { DockerServiceController } from "../../controller/docker_controller";
import { useState } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";
import * as React from "react";

export default function RemoteTable() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [containers, setContainers] = useState([]);
  const style = { color: "green" };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    DockerServiceController.remoteContainer()
      .then(({ containers }) => {
        setContainers(containers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tableElement">
      <div id="result"></div>

      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              <strong>Containers</strong>
            </th>
            <th scope="col" colspan="10">
              <FormControl variant="standard">
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              &nbsp;&nbsp;&nbsp;
              <Button size="small" color="primary" variant="contained">
                submit
              </Button>
              &nbsp;&nbsp;
              <Button size="small" color="success" variant="contained">
                add container
              </Button>
            </th>
            <th scope="col" colspan="10">
              <div class="btn-group" role="group" aria-label="Action">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => {
                    // DockerServiceController.start(container.Id);
                  }}
                >
                  start
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    // DockerServiceController.stop(container.Id);
                  }}
                >
                  stop
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    // DockerServiceController.restart(container.Id);
                  }}
                >
                  restart
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    // DockerServiceController.remove(container.Id);
                  }}
                >
                  remove
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  kill
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  pause
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  resume
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  rename
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  scan
                </button>
                <button type="button" class="btn btn-primary" onclick="">
                  sign
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col" colspan="2">
              name
            </th>
            <th scope="col" colspan="2">
              verified
            </th>
            <th scope="col" colspan="2">
              state
            </th>
            <th scope="col" colspan="2">
              Quick Actions
            </th>
            <th scope="col" colspan="2">
              Stack
            </th>
            <th scope="col" colspan="2">
              image
            </th>
            <th scope="col" colspan="2">
              Created
            </th>
            <th scope="col" colspan="2">
              IP Address
            </th>
            <th scope="col" colspan="2">
              Published Ports Ownership
            </th>
          </tr>
        </thead>
        <tbody id="result_data">
          {containers?.map((container) => {
            return (
              <tr>
                <td>{container.Name.replace("/", "")}</td>
                <td colSpan="2" style={style}>
                  <IconButton aria-label="verified">
                    <VerifiedUserIcon style={{ color: "green" }} />
                  </IconButton>
                </td>
                {/* <td colspan="3">{container.State.Status}</td> */}
                <td colspan="3">{container.Status}</td>
                <td colspan="2">quickAction</td>
                <td colspan="2">{container.Stack}</td>
                <td colspan="2">{container.Image}</td>
                <td colspan="2">{container["Created Time"]}</td>
                <td colspan="2">{container.IPAddress}</td>
                <td colspan="2">{Object.keys(container.Port)[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
