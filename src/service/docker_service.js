
/* eslint-disable */
import $ from "jquery";

export class DockerService{
    static container(){
        const resJson ={
            state_keys:
            {
                running: '<p class="text-white bg-success">실행</p>',
                exited: '<p class="text-white bg-danger">종료</p>',
                created: "생성",
                restarting: "재시작",
                paused: "일시정지",
            }
        }

        return new Promise(function (resolve, reject) {
            $.ajax({
            method: "GET",
            url: 'http://react.seungwook.me/api/container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6',
            contentType: "application/json",
            success: function (data) {
                resJson.container_data=data["containers"];
                resolve(resJson);
              },
            error: function (request, status, error) {
                console.log(request, status, error);
                reject(error);
            },
            });
        });
    }

    static fetchRows(resJson){
      const {container_data, state_keys} = resJson;
      let tempList = []
      console.log(container_data.length)
      for (let i = 0; i < container_data.length; i++) {
          tempList.append(`
                            <tr>
                                <th scope="col"> <input class="form-check-input" type="checkbox" id="" name="chk_list"> </th>
                                <td>${container_data[i]["Name"]}</td>
                                <td colspan="2"><i class="fa-solid fa-circle-xmark" style="color:#d33724;"></i></td>
                                <td colspan="2">${
                                  state_keys[
                                    container_data[i]["State"]["Status"]
                                  ]
                                }</td>
                                <td colspan="2">${
                                  container_data[i]["Config"]["Image"]
                                }</td>
                                <td colspan="2">
                                <div class="btn-group" role="group" aria-label="Action">
                                    <button type="button" class="btn btn-success" onclick="start('${
                                      container_data[i]["Id"]
                                    }')">start</button>
                                    <button type="button" class="btn btn-warning" onclick="stop('${
                                      container_data[i]["Id"]
                                    }')">stop</button>
                                    <button type="button" class="btn btn-primary" onclick="restart('${
                                      container_data[i]["Id"]
                                    }')">restart</button>
                                    <button type="button" class="btn btn-danger" onclick="remove('${
                                      container_data[i]["Id"]
                                    }')">remove</button>
                                    <button type="button" class="btn btn-primary" onclick="">scan</button>
                                    <button type="button" class="btn btn-primary" onclick="">sign</button>
                                </div>
                                </td>
                            </tr>
                        `);
        }
        return tempList;
    }

    static start(){
        $.ajax({
            method: "POST",
            url: SERVER_ADDRESS + "/container/start",
            data: JSON.stringify({ container_id: container_id }),
            contentType: "application/json",
            success: function (data) {
            console.log(data);
            this.container();
        },
        beforeSend: function () {
            $(".wrap-loading").removeClass("display-none");
        },
        complete: function () {
            $(".wrap-loading").addClass("display-none");
        },
        error: function (request, status, error) {
            console.log(request, status, error);
        },
        timeout: 100000,
        });

    }
}