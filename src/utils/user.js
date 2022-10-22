import api from "../services/api";

export const register = async (requestData) => {
  const { status } = await api.post("users", requestData);

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

export const token = (token) => {
  localStorage.setItem("auth_token", token);
};

export const login = async (requestData, logged) => {
  const { status, data } = await api.post("/authenticate", requestData);

  const { auth_token, user } = data;

  if (status === 200) {
    loggedInUser(user);
    token(auth_token);
    logged(true);

    const { id } = await getLoggedUser();

    await api.post(`/users/${id}/books/`, {
      headers: {
        Authorization: `token ${localStorage.getItem("auth_token")}`,
      },
    });
  }

  return status;
};

export const loggout = () => {
  localStorage.removeItem("userLogged");
  localStorage.removeItem("auth_token");
};
