import $ from "jquery";
import SERVER_ADDRESS from "../config/config";

function container() {
  var state_keys = {
    running: '<p class="text-white bg-success">실행</p>',
    exited: '<p class="text-white bg-danger">종료</p>',
    created: "생성",
    restarting: "재시작",
    paused: "일시정지",
  };

  var result_element = $("#result");
  return new Promise(function (resolve, reject) {
    result_element.empty();
    $.ajax({
      method: "GET",
      url: SERVER_ADDRESS + "/container",
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        resolve(data);
        result_element.append(`
                            <table class="table table-striped table-bordered text-center align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col"> <input class="form-check-input" type="checkbox" id="chk_all" name="chk_all" onclick="selectAll(this)"> </th>
                                        <th scope="col" colspan="2">name</th>
                                        <th scope="col" colspan="2">verified</th>
                                        <th scope="col" colspan="2" >state</th>
                                        <th scope="col" colspan="2" >image</th>
                                        <th scope="col" colspan="2" >command</th>
                                    </tr>
                                </thead>
                                <tbody id="result_data">
                                </tbody>
                            </table>`);
        var result_data_element = $("#result_data");
        const container_data = data["containers"];
        result_data_element.append(`
                            <tr>
                                <th scope="col"> <input class="form-check-input" type="checkbox" id="" name="chk_list"> </th>
                                <td>TeamSaba</td>
                                <td colspan="2"><i class="fa-solid fa-circle-check" style="color:#00a157;"></i></td>
                                <td colspan="2">running</td>
                                <td colspan="2">seugnwook0417/TeamSaba:latest</td>
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
                        `);
        for (let i = 0; i < container_data.length; i++) {
          result_data_element.append(`
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
      },
      error: function (request, status, error) {
        console.log(request, status, error);
        reject(error);
      },
    });
  });
}

function start(container_id) {
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

function stop(container_id) {
  $.ajax({
    method: "POST",
    url: SERVER_ADDRESS + "/container/stop",
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

function restart(container_id) {
  $.ajax({
    method: "POST",
    url: SERVER_ADDRESS + "/container/restart",
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

function remove(container_id) {
  $.ajax({
    method: "POST",
    url: SERVER_ADDRESS + "/container/remove",
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
      this.container();
    },
    error: function (request, status, error) {
      console.log(request, status, error);
    },
    timeout: 100000,
  });
}

export { container, start, stop, restart, remove };
