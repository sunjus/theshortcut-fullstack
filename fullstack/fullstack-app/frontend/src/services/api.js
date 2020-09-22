import axios from "axios";

const api = axios.create({
  baseURL: "http://18.156.127.250:8000",
});

export default api;
