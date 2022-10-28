import api from "../services/api";

export const register = async (body) => {
  const { status } = await api.post("/users", body).catch((error) => {
    return error;
  });

  return status;
};

export const login = async (body) => {
  const { status, data } = await api
    .post("/authenticate", body)
    .catch((error) => {
      return error;
    });

  if (status === 200) {
    loggedInUser(...data);
  }

  return status;
};

export const loggedInUser = (requestData) => {
  localStorage.setItem("userLogged", JSON.stringify(requestData));
};

export const getLoggedUser = () => {
  if (localStorage.getItem("userLogged")) {
    return JSON.parse(localStorage.getItem("userLogged"));
  }
};

export const loggout = () => {
  localStorage.clear();
};
