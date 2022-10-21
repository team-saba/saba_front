/* eslint-disable */
import $ from "jquery";
import {SERVER_ADDRESS} from "../config/config";
import rows from "../elements/rows";
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

        const resJson = DockerService.container();     
        //state_keys & container_data
    
        const rows =DockerService.fetchRows(resJson)
        for (tempRow in rows){
            result_data_element.append(tempRow)
        }
        result_element.append(result_data_element)
    }

    static start(container_id) {
        const status = DockerService.start();
    }
}
