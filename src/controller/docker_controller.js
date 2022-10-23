/* eslint-disable */
import $ from "jquery";
import {SERVER_ADDRESS} from "../config/config";
import { DockerService } from "../service/docker_service";

export class DockerServiceController{
    static container(){
        const resJson = DockerService.container()
        return resJson;
    }

    static start(container_id) {
        const status = DockerService.start();
    }
}
