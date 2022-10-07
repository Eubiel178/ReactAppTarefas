import axios from "axios";

const api = axios.create({
  baseURL: `https://ka-users-api.herokuapp.com`,
});

export default api;
