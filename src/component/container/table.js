/* eslint-disable */
import { useEffect } from "react";
import { DockerServiceController } from "../../controller/docker_controller";
import { useState } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import remoteTable from "./remoteTable";

export default function Table() {
  const params = new URLSearchParams(window.location.search);
  const imageId = params.get("remote");

  let [containers, setContainers] = useState([]);
  let [container_id, setContainerId] = useState();
  let [new_name, setNewName] = useState();
  const style = { color: "green" };

  function getContainer() {
    DockerServiceController.container()
      .then(({ containers }) => {
        setContainers(containers);
      })
      .catch((err) => console.log(err));
  }

  if (imageId === "remote") {
    return remoteTable();
  } else {
    useEffect(() => {
      getContainer();
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
              <th scope="col" colspan="5">
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
                  search
                </Button>
              </th>
              <th scope="col" colspan="5">
                <FormControl variant="standard">
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    onChange={(newValue) => setNewName(newValue.target.value)}
                  />
                </FormControl>
                &nbsp;&nbsp;&nbsp;
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={async () => {
                    let result = await DockerServiceController.rename(
                      container_id,
                      new_name
                    );
                    if (result) getContainer();
                  }}
                >
                  rename
                </Button>
              </th>

              <th scope="col" colspan="10">
                <div class="btn-group" role="group" aria-label="Action">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={async () => {
                      let result = await DockerServiceController.start(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    start
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={async () => {
                      let result = await DockerServiceController.stop(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    stop
                  </button>
                  <button
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
                    type="button"
                    class="btn btn-danger"
                    onClick={async () => {
                      let result = await DockerServiceController.remove(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    remove
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={async () => {
                      let result = await DockerServiceController.kill(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    kill
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={async () => {
                      let result = await DockerServiceController.pause(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    pause
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={async () => {
                      let result = await DockerServiceController.resume(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    resume
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={async () => {
                      let result = await DockerServiceController.exec(
                        container_id
                      );
                      if (result) getContainer();
                    }}
                  >
                    exec
                  </button>
                  {/* <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      getContainer();
                    }}
                  >
                    scan
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      getContainer();
                    }}
                  >
                    sign
                  </button> */}
                </div>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">
                {" "}
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="chk_all"
                  name="chk_all"
                  onclick="selectAll(this)"
                />{" "}
              </th>
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
                  <th scope="col">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="chk_list"
                      value={container.CONTAINER_ID}
                      onChange={() => setContainerId(container.CONTAINER_ID)}
                    />
                  </th>
                  <td>{container.Name.replace("/", "")}</td>
                  <td colspan="2" style={style}>
                    verified icon
                  </td>
                  <td colspan="3">{container.Status}</td>
                  <td colspan="2">quickAction</td>
                  <td colspan="2">stack</td>
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
}
