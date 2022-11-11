/* eslint-disable */
import { SERVER_ADDRESS, token } from "../config/config";
import instance from "./axiosConfig";

export class DockerService {
  static container() {
    return new Promise((resolve, reject) => {
      instance.get("/container/").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static remoteContainer() {
    return new Promise((resolve, reject) => {
      instance.get("/remote/container").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static start(container_id) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/start" + token, { container_id })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static stop(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/stop" + token, { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static restart(container_id) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/restart" + token, { container_id })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static remove(container_id) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/remove" + token, { container_id })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static image() {
    return new Promise((resolve, reject) => {
      instance.get("/image/" + token).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static kill(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/kill" + token, { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static pause(container_id) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/pause" + token, { container_id })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static resume(container_id) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/resume" + token, { container_id })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static rename(container_id, new_name) {
    return new Promise((resolve, reject) => {
      instance
        .post(
          "/container/rename" + token,
          { container_id },
          { params: { new_name } }
        )
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static exec(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/exec" + token, { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }
}
