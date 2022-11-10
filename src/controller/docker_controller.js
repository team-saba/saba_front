import { DockerService } from "../service/docker_service";

export class DockerServiceController {
  static container() {
    const resJson = DockerService.container();
    return resJson;
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

  static image() {
    const resJson = DockerService.image();
    return resJson;
  }

  static kill(container_id) {
    const resJson = DockerService.kill(container_id);
    return resJson;
  }
  static pause(container_id) {
    const resJson = DockerService.pause(container_id);
    return resJson;
  }
  static resume(container_id) {
    const resJson = DockerService.resume(container_id);
    return resJson;
  }
  static rename(container_id, new_name) {
    const resJson = DockerService.rename(container_id, new_name);
    return resJson;
  }

  static exec(container_id) {
    const resJson = DockerService.exec(container_id);
    return resJson;
  }
}
