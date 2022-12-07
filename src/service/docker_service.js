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
      instance.post("/container/start", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static stop(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/stop", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static restart(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/restart", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static remove(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/remove", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static image() {
    return new Promise((resolve, reject) => {
      instance.get("/image/").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static kill(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/kill", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static pause(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/pause", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static resume(container_id) {
    return new Promise((resolve, reject) => {
      instance.post("/container/resume", { container_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static rename(container_id, new_name) {
    return new Promise((resolve, reject) => {
      instance
        .post("/container/rename", { container_id }, { params: { new_name } })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static scan(image_id) {
    return new Promise((resolve, reject) => {
      instance.post("/image/scan", { image_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }
}
