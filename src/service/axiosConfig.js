import axios from "axios";
import { SERVER_ADDRESS, token } from "../config/config";

const instance = axios.create({
  baseURL: SERVER_ADDRESS,
});

instance.interceptors.request.use(function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
