import { VulnerService } from "../service/vulner_service";

export class VulnerServiceController {
  static scanList() {
    return VulnerService.scanList();
  }

  static scanImage(imageName, trivy, clair) {
    return VulnerService.scanImage(imageName, trivy, clair);
  }

  static scanResult(imageName) {
    return VulnerService.scanResult(imageName);
  }

  static scanQueueList() {
    return VulnerService.scanQueueList();
  }
}
