/* eslint-disable */
import $ from "jquery";

export class DockerService{
    static container(){
        const resJson ={
            state_keys:
            {
                running: '<p class="text-white bg-success">실행</p>',
                exited: '<p class="text-white bg-danger">종료</p>',
                created: "생성",
                restarting: "재시작",
                paused: "일시정지",
            }
        }

        return new Promise(function (resolve, reject) {
            console.log('http://react.seungwook.me/api/container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6')
            
            $.ajax({
            method: "GET",
            url: 'http://react.seungwook.me/api/container?token=8f408a4bc9873d9c227ad7ecf6297698236879732ed6addf514290072c5bceb10c69e1a91a9a1ab3067793af6991ae6a16a0849966682a8a7251a087eabdcac6',
            contentType: "application/json",
            success: function (data) {
                resolve(data);
                console.log(data)
                const container_data = data["containers"];
            },
            error: function (request, status, error) {
                console.log(request, status, error);
                reject(error);
            },
            });
        });
    }
 
    static start(){
        $.ajax({
            method: "POST",
            url: SERVER_ADDRESS + "/container/start",
            data: JSON.stringify({ container_id: container_id }),
            contentType: "application/json",
            success: function (data) {
            console.log(data);
            this.container();
        },
        beforeSend: function () {
            $(".wrap-loading").removeClass("display-none");
        },
        complete: function () {
            $(".wrap-loading").addClass("display-none");
        },
        error: function (request, status, error) {
            console.log(request, status, error);
        },
        timeout: 100000,
        });

    }
}




