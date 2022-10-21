
/* eslint-disable */
import $ from "jquery";
import {SERVER_ADDRESS} from "../config/config";
import { DockerService } from "../service/docker_service";

export class DockerServiceController{
    static container(){
        var state_keys = {
            running: '<p class="text-white bg-success">실행</p>',
            exited: '<p class="text-white bg-danger">종료</p>',
            created: "생성",
            restarting: "재시작",
            paused: "일시정지",
        };

        var result_element = $("#result");
        var result_data_element = $("#result_data");
        
        const tempData = DockerService.container();        
    }

    static start(container_id) {
        const status = DockerService.start();
    }
}

