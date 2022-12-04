import { Setting } from "../service/setting";

export class SettingController {
  static getSetting() {
    return Setting.get_setting();
  }
  static updateSetting(setting) {
    return Setting.update_setting(setting);
  }
}
