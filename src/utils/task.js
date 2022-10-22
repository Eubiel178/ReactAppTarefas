import api from "../services/api";

import { getLoggedUser } from "./user";

export const add = async (task) => {
  const { id } = getLoggedUser();

  return await api.post(
    `/users/${id}/books/`,
    { book: task },
    {
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    }
  );
};

export const get = async () => {
  const { id } = getLoggedUser();

  return await api.get(`/users/${id}/books/`, {
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  });
};

export const edit = async (task, taskId) => {
  const { id } = getLoggedUser();

  return await api.put(
    `/users/${id}/books/${taskId}/`,
    { book: task },
    {
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    }
  );
};

export const remove = async (taskId) => {
  const { id } = getLoggedUser();

  return await api.delete(`/users/${id}/books/${taskId}`, {
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  });
};

export const getConcluded = async () => {
  if (localStorage.getItem("concluded")) {
    return JSON.parse(localStorage.getItem("concluded"));
  }
};
