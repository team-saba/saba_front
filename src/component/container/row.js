import React from 'react';

export default function rows({container}){
  return (
     <tr>
                      <th scope="col"> <input class="form-check-input" type="checkbox" id="" name="chk_list"/> </th>
                      <td>{container.Name}</td>
                      <td colspan="2">verified icon</td>
                      <td colspan="2">{container.State.Status}</td>
                      <td colspan="2">{container.Config.Image}</td>
                      <td colspan="2">
                      <div class="btn-group" role="group" aria-label="Action">
                          <button type="button" class="btn btn-success" onclick="">start</button>
                          <button type="button" class="btn btn-warning" onclick="">stop</button>
                          <button type="button" class="btn btn-primary" onclick="">restart</button>
                          <button type="button" class="btn btn-danger" onclick="">remove</button>
                          <button type="button" class="btn btn-primary" onclick="">scan</button>
                          <button type="button" class="btn btn-primary" onclick="">sign</button>
                      </div>
                      </td>
                   </tr>
  );   
}

