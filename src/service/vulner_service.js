import instance from "./axiosConfig";

export class VulnerService {
  static scanList() {
    return new Promise((resolve, reject) => {
      instance.get("/scan/").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static scanImage(imageId, trivy, clair) {
    return new Promise((resolve, reject) => {
      instance
        .post("/scan/start_reservation_process", {
          imageId: imageId,
          clair: clair,
          trivy: trivy,
        })
        .then((res) => {
          resolve(res.data);
        });
    });
  }

  static scanResult(imageId) {
    return new Promise((resolve, reject) => {
      instance.get("/scan/result/" + imageId).then((res) => {
        resolve(res.data);
      });
    });
  }

  static scanQueueList(imageId) {
    return new Promise((resolve, reject) => {
      instance.get("/scan/list_reservation_process").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }
}
