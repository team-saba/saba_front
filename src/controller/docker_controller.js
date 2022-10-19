import $ from "jquery";
import {SERVER_ADDRESS,token} from "../config/config";

export class DockerController{
    constructor(){}

    static container() {
        $.ajax({
                method: "GET",
                url: SERVER_ADDRESS + "/container"+token,
                contentType: "application/json",
                dataType : "json",
                success: function (data) {
                    alert(data)
                    console.log(data);

                },
                error: function (request, status, error) {
                    console.log(request, status, error);
                },
            });

        // return new Promise(function (resolve, reject) {
        //     console.log(SERVER_ADDRESS + "/container"+token) //test
        //     //name/verified/state/image/command

        //     $.ajax({
        //         method: "GET",
        //         url: SERVER_ADDRESS + "/container"+token,
        //         contentType: "application/json",
        //         dataType : "json",
        //         success: function (data) {
        //             alert(data)
        //             console.log(data);
        //             resolve(data);

        //         },
        //         error: function (request, status, error) {
        //             console.log(request, status, error);
        //             reject(error);
        //         },
        //     });
        // });


    }
}


