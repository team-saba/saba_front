/* eslint-disable */
import instance from "./axiosConfig";

export class SigningService {
  static login(id, pw) {
    return new Promise((resolve, reject) => {
      instance
        .post("/image/docker_login", null, { params: { id: id, pw: pw } })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      instance.post("/image/docker_logout").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static checkLogin() {
    return new Promise((resolve, reject) => {
      instance.post("/image/docker_login_check").then((res) => {
        if (!res.data) reject(new Error(500));
        console.log(res.data);
        resolve(res.data);
      });
    });
  }

  static checkLoginId(id) {
    return new Promise((resolve, reject) => {
      instance.post("/image/docker_login_id_check").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }
}
