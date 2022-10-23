import { useEffect } from "react";
import {DockerServiceController} from "../controller/docker_controller";
import { useState } from "react";

export default function Table() {
  let [ containers, setContainers ] = useState([]);
  const style={ color: 'green'}

  useEffect(() => {
    DockerServiceController.container()
    .then(({container_data})=>
      setContainers(container_data)
      )
    .catch(err => console.log(err));
  }, []);

  return (
      <div className="tableElement">
        <div id="result"></div>

        <table class="table table-striped table-bordered text-center align-middle">
            <thead>
                <tr>
                    <th scope="col"> <input class="form-check-input" type="checkbox" id="chk_all" name="chk_all" onclick="selectAll(this)"/> </th>
                    <th scope="col" colspan="2">name</th>
                    <th scope="col" colspan="2">verified</th>
                    <th scope="col" colspan="2" >state</th>
                    <th scope="col" colspan="2" >image</th>
                    <th scope="col" colspan="2" >command</th>
                </tr>
            </thead>
            <tbody id="result_data">
    {containers.map(c=>{
                  return (
                    <tr>
                      <th scope="col"> <input class="form-check-input" type="checkbox" id="" name="chk_list"/> </th>
                      <td>{c.Name}</td>
                      <td colspan="2" style={style}>verified icon</td>
                      <td colspan="2">{c.State.Status}</td>
                      <td colspan="2">{c.Config.Image}</td>
                      <td colspan="2">
                      <div class="btn-group" role="group" aria-label="Action">
                          <button type="button" class="btn btn-success" onclick="start('')">start</button>
                          <button type="button" class="btn btn-warning" onclick="stop('')">stop</button>
                          <button type="button" class="btn btn-primary" onclick="">restart</button>
                          <button type="button" class="btn btn-danger" onclick="remove('')">remove</button>
                          <button type="button" class="btn btn-primary" onclick="">scan</button>
                          <button type="button" class="btn btn-primary" onclick="">sign</button>
                      </div>
                      </td>
                   </tr>
                  );})}

            </tbody>
        </table>
      </div>
    );
}
