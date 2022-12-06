import axios from "axios";

const api = axios.create({
  baseURL: `https://api-for-todolist-production.up.railway.app`,
});

export default api;
