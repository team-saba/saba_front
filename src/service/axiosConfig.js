import axios from "axios";
import { SERVER_ADDRESS } from "../config/config";

const instance = axios.create({
  baseURL: SERVER_ADDRESS,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
