import axios from "axios";

const api = axios.create({
  baseURL: `https://api-for-todo-list.vercel.app`,
});

export default api;
