import instance from "./axiosConfig";

export class Setting {
  static get_setting() {
    return new Promise((resolve, reject) => {
      instance.get("/setting/settings").then((res) => {
        localStorage.setItem("AUTO_SCAN", JSON.stringify(res.data.AUTO_SCAN));
        localStorage.setItem("AUTO_STOP", JSON.stringify(res.data.AUTO_STOP));
        localStorage.setItem(
          "GIJUN_PER_MINUTE",
          JSON.stringify(res.data.GIJUN_PER_MINUTE)
        );
        localStorage.setItem("HOOK_URL", res.data.HOOK_URL);
        localStorage.setItem("VUL_LEVEL", JSON.stringify(res.data.VUL_LEVEL));
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static update_setting(data) {
    return new Promise((resolve, reject) => {
      instance.put("/setting/settings", data).then((res) => {
        resolve(res.data);
      });
    });
  }
}
