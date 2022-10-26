import { DockerService } from "../service/docker_service";

export class DockerServiceController {
  static async container() {
    const container_data = await DockerService.container();
    return container_data;
  }

  static start(container_id) {
    const resJson = DockerService.start(container_id);
    return resJson;
  }

  static stop(container_id) {
    const resJson = DockerService.stop(container_id);
    return resJson;
  }

  static restart(container_id) {
    const resJson = DockerService.restart(container_id);
    return resJson;
  }

  static remove(container_id) {
    const resJson = DockerService.remove(container_id);
    return resJson;
  }
}
