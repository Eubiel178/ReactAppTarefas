import api from "../../services/api";

export const register = async (body) => {
  const { status } = await api.post("/users", body).catch((error) => {
    return error;
  });

  return status;
};

export const login = async (body) => {
  const { status, data } = await api.post("/authenticate", body);

  if (status === 200) {
    localStorage.setItem("token", data._id);
  }

  return status;
};

export const editUser = async (body, id) => {
  const response = await api.patch(`/users/${id}`, body);
};

export const getOne = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const logOff = () => {
  localStorage.clear();
};
