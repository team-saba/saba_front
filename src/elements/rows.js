import $ from "jquery";

export default function rows(resJson) {
    const {container_data, state_keys} = resJson;
    var result_data_element = $("#result_data");
    
    for (let i = 0; i < container_data.length; i++) {
        result_data_element.append(`
            <tr>
                <th scope="col"> <input class="form-check-input" type="checkbox" id="" name="chk_list"> </th>
                <td>${container_data[i]["Name"]}</td>
                <td colspan="2"><i class="fa-solid fa-circle-xmark" style="color:#d33724;"></i></td>
                <td colspan="2">${
                    state_keys[
                    container_data[i]["State"]["Status"]
                    ]
                }</td>
                <td colspan="2">${
                    container_data[i]["Config"]["Image"]
                }</td>
                <td colspan="2">
                <div class="btn-group" role="group" aria-label="Action">
                    <button type="button" class="btn btn-success" onclick="start('${
                        container_data[i]["Id"]
                    }')">start</button>
                    <button type="button" class="btn btn-warning" onclick="stop('${
                        container_data[i]["Id"]
                    }')">stop</button>
                    <button type="button" class="btn btn-primary" onclick="restart('${
                        container_data[i]["Id"]
                    }')">restart</button>
                    <button type="button" class="btn btn-danger" onclick="remove('${
                        container_data[i]["Id"]
                    }')">remove</button>
                    <button type="button" class="btn btn-primary" onclick="">scan</button>
                    <button type="button" class="btn btn-primary" onclick="">sign</button>
                </div>
                </td>
            </tr>
        `);
    }
    return result_data_element;
}
