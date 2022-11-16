import { SigningService } from "../service/signing_service";
import { DockerService } from "../service/docker_service";

export class SigningServiceController {
  static async login(id, pw) {
    id = id.trim();
    pw = pw.trim();
    const resJson = await SigningService.login(id, pw);
    console.log(resJson);
    return resJson;
  }

  static async logout() {
    const resJson = await SigningService.logout();
    alert(resJson);
    return resJson;
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

  static async keyGen(pw) {
    if (typeof pw == "undefined" || pw == null || pw == "") {
      alert("키 생성 비밀번호를 입력해주세요");
      return;
    }
    try {
      const resJson = await SigningService.keyGen(pw);
      alert(resJson["key_gen_result"] + " 생성됨");
    } catch (e) {
      throw e;
    }
  }

  static async keyDel(pw) {
    if (typeof pw == "undefined" || pw == null || pw == "") {
      alert("키 삭제 비밀번호를 입력해주세요");
      return;
    }
    const resJson = await SigningService.keyDel(pw);
    if (resJson["key_del result"]) alert(resJson["key_del result"]);
    else alert(resJson);
  }

  static sign(image_id) {
    const resJson = SigningService.sign(image_id);
    return resJson;
  }

  static verify(image_id) {
    const resJson = SigningService.verify(image_id);
    return resJson;
  }

  static parsingResult(result) {
    const resJson = JSON.parse(result)[0];
    return resJson;
  }
}
