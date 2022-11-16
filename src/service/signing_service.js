/* eslint-disable */
import instance from "./axiosConfig";
import { token } from "../config/config";

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
      instance
        .post("/image/docker_login_id_check", null, { params: { id: id } })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static keyGen(pw) {
    return new Promise((resolve, reject) => {
      instance
        .post("/image/keygen", null, { params: { password: pw } })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static keyDel(pw) {
    return new Promise((resolve, reject) => {
      instance
        .post("/image/keydel", null, {
          params: { password: pw },
        })
        .then((res) => {
          if (!res.data) reject(new Error(500));
          resolve(res.data);
        });
    });
  }

  static sign(image_id) {
    return new Promise((resolve, reject) => {
      instance.post("/image/signing_image", { image_id }).then((res) => {
        resolve();
      });
    });
  }

  static verify(image_id) {
    return new Promise((resolve, reject) => {
      instance.post("/image/verify_image", { image_id }).then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }
}
