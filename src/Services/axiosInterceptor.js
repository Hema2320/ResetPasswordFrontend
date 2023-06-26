import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/",
  timeout: 6000,
});

export default instance;
