import axios from "axios";

const host = "http://api.busbi.racinsoft.ir";

const instance = axios.create({
  baseURL: host,
  timeout: 20000,
});

export default instance;
