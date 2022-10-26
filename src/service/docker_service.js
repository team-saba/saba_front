/* eslint-disable */
import $ from "jquery";
import axios from 'axios';
import { SERVER_ADDRESS, token } from "../config/config";

export class DockerService {
  static async container() {
    await axios.get(SERVER_ADDRESS + "/container" + token)
    .then(
          response => {
            const { containers:container_data } = response.data;
            console.log(container_data);
            return container_data;
          }
        )
    .catch(function (error) {
      console.log(error);
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