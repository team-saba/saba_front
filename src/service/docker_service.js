/* eslint-disable */
import $ from "jquery";
import { SERVER_ADDRESS, token } from "../config/config";
import axios from "axios";
import instance from "./axiosConfig";

export class DockerService {
  static container() {
    const resJson = {
      state_keys: {
        running: '<p class="text-white bg-success">실행</p>',
        exited: '<p class="text-white bg-danger">종료</p>',
        created: "생성",
        restarting: "재시작",
        paused: "일시정지",
      },
    };
    return new Promise((resolve, reject) => {
        instance.get("/container" + token).then((res) => {
          console.log(res.data);
          resolve(res.data);
        });
    })
  }

  static start(container_id) {
    $.ajax({
      method: "POST",
      url: SERVER_ADDRESS + "/container/start" + token,
      data: JSON.stringify({ container_id: container_id }),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        // eslint-disable-next-line no-undef
        resolve(data);
      },
      error: function (request, status, error) {
        console.log(request, status, error);
        return false;
      },
    });
  }

  static stop(container_id) {
    $.ajax({
      method: "POST",
      url: SERVER_ADDRESS + "/container/stop" + token,
      data: JSON.stringify({ container_id: container_id }),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        // eslint-disable-next-line no-undef
        resolve(data);
      },
      error: function (request, status, error) {
        console.log(request, status, error);
        return false;
      },
    });
  }

  static restart(container_id) {
    $.ajax({
      method: "POST",
      url: SERVER_ADDRESS + "/container/restart" + token,
      data: JSON.stringify({ container_id: container_id }),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
      },
      error: function (request, status, error) {
        console.log(request, status, error);
        return false;
      },
    });
  }

  static remove(container_id) {
    $.ajax({
      method: "POST",
      url: SERVER_ADDRESS + "/container/remove" + token,
      data: JSON.stringify({ container_id: container_id }),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
      },
      error: function (request, status, error) {
        console.log(request, status, error);
        return false;
      },
    });
  }
}
