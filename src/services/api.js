import axios from "axios";

const api = axios.create({
  baseURL: `https://todo-list-apii.herokuapp.com`,
});

export default api;
