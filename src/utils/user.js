import api from "../services/api";

export const register = async (data) => {
  return await api.post("users", data).catch((error) => {
    return error;
  });
};

export const token = (token) => {
  localStorage.setItem("auth_token", token);
};

export const loggedInUser = (user) => {
  localStorage.setItem("userLogged", JSON.stringify(user));
};

export const getLoggedUser = () => {
  if (localStorage.getItem("userLogged")) {
    return JSON.parse(localStorage.getItem("userLogged"));
  }
};

export const login = async (data, logged) => {
  const { status, auth_token, user } = await api
    .post("/authenticate", data)
    .catch((error) => {
      if (error) {
        return { status: false };
      }
    });

  if (status !== false) {
    token(auth_token);
    loggedInUser(user);

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
