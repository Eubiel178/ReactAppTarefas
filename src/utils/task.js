import api from "../services/api";

import { getLoggedUser } from "./user";

export const add = async (body) => {
  const response = await api.post("/list", body);
};

export const get = async () => {
  const { _id } = getLoggedUser();

  const { data } = await api.get(`/list/user-id/${_id}`);

  return data;
};

export const edit = async (body, taskId) => {
  const response = await api.patch(`/list/task-id/${taskId}`, body);
};

export const remove = async (taskId) => {
  const response = await api.delete(`/list/task-id/${taskId}`);
};

export const getConcluded = async () => {
  if (localStorage.getItem("concluded")) {
    return JSON.parse(localStorage.getItem("concluded"));
  }
};
