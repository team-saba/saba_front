import { SigningService } from "../service/signing_service";

export class SigningServiceController {
  static async login(id, pw) {
    id = id.trim();
    pw = pw.trim();
    const resJson = await SigningService.login(id, pw);
    console.log(resJson);
    return resJson;
  }

  static logout() {
    alert("현재 InternalServerError 뜸");
    // const resJson = SigningService.logout();
    // return resJson;
  }

  static async checkLogin() {
    const resJson = await SigningService.checkLogin();
    console.log(resJson.ID);
    if (resJson.ID) {
      const loggedId = resJson.ID;
      alert(loggedId + "님이 로그인 중입니다.");
    } else {
      alert("로그인되지 않음");
    }
    return resJson;
  }

  static checkLoginId(id) {
    alert("현재 InternalServerError 뜸");
    // const resJson = SigningService.checkLoginId(id);
    // return resJson;
  }

  static keyGen(pw) {
    alert("현재 InternalServerError 뜸");
    // if (typeof pw == "undefined" || pw == null || pw == "") {
    //   alert("키 생성 비밀번호를 입력해주세요");
    //   return;
    // }
    // const resJson = SigningService.keyGen(pw);
    // return resJson;
  }

  static async keyDel(pw) {
    if (typeof pw == "undefined" || pw == null || pw == "") {
      alert("키 생성 비밀번호를 입력해주세요");
      return;
    }
    const resJson = await SigningService.keyDel(pw);
    console.log(resJson);
    alert(resJson);
    return resJson;
  }
}
