import { VulnerService } from "../service/vulner_service";

export class VulnerServiceController {
  static scanList() {
    const resJson = VulnerService.scanList();
    return resJson;
  }

  static scanImage(imageName) {
    const resJson = VulnerService.scanImage(imageName);
    return resJson;
  }

  static scanResult(imageName) {
    const resJson = VulnerService.scanResult(imageName);
    return resJson;
  }

  static scanQueueList() {
    const resJson = VulnerService.scanQueueList();
    return resJson;
  }
}
