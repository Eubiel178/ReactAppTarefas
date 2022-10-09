import { json } from "react-router-dom";
import api from "../services/api";

import { getLoggedUser } from "./user";

export const add = async (task) => {
  const user = getLoggedUser();

  return await api.post(
    `/users/${user.id}/books/`,
    { book: task },
    {
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    }
  );
};

export const get = async () => {
  const user = getLoggedUser();

  return await api.get(`/users/${user.id}/books/`, {
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  });
};

export const edit = async (task, id) => {
  const user = getLoggedUser();

  return await api.put(
    `/users/${user.id}/books/${id}/`,
    { book: task },
    {
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    }
  );
};

export const remove = async (id) => {
  const user = getLoggedUser();

  return await api.delete(`/users/${user.id}/books/${id}`, {
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

export const concluded = (task) => {
  let concluded = [];

  if (localStorage.getItem("concluded")) {
    concluded = getConcluded();
    concluded.unshift(task);
  } else {
    concluded.unshift(task);
  }

  localStorage.setItem("concluded", JSON.stringify(concluded));
};

export const clearHistoric = () => {
  localStorage.removeItem("concluded");
};
