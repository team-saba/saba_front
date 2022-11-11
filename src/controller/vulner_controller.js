import { VulnerService } from "../service/vulner_service";

export class VulnerServiceController {
  static scanList() {
    return VulnerService.scanList();
  }

  static scanImage(imageName) {
    return VulnerService.scanImage(imageName);
  }

  static scanResult(imageName) {
    return VulnerService.scanResult(imageName);
  }

  static scanQueueList() {
    return VulnerService.scanQueueList();
  }
}
