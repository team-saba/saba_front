import axios from "./axiosConfig";
import { SERVER_ADDRESS, token } from "../config/config";

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const apiCall = (
  method = METHOD.GET,
  url,
  data,
  headers = { "Content-Type": "application/json" }
) => {
  const request = (): Promise<any> => {
    switch (method) {
      case METHOD.POST:
        return axios.post(url, data, { headers });
      case METHOD.GET:
        return axios.get(url + token, { headers });
      case METHOD.DELETE:
        return axios.delete(url, { headers });
      case METHOD.PUT:
        return axios.put(url, data, { headers });
      case METHOD.PATCH:
        return axios.patch(url, data, { headers });
    }
    return new Promise((resolve, reject) => resolve({})); // axios.post<User[]>(endpoint, params, { ...DyanamicConfig });
  };

  const req = request();
  return req;
};
