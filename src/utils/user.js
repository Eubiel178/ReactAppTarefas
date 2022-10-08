import api from "../services/api";

export const register = async (data) => {
  const request = await api.post("users", data).catch((error) => {
    return error;
  });

  return request;
};

export const token = (tokenJSON) => {
  localStorage.setItem("auth_token", tokenJSON.data.auth_token);
};

export const getToken = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }
};

export const loggedInUser = (user) => {
  localStorage.setItem("userLogged", JSON.stringify(user));
};

export const login = async (data) => {
  const request = await api.post("/authenticate", data);

  if (request.data.auth_token) {
    token(request);
    loggedInUser(request.data.user);

    const auth_token = await getToken();
    const user = getLoggedUser();

    await api.post(`/users/${user.id}/books/`, {
      headers: {
        Authorization: `token ${auth_token}`,
      },
    });
  }

  return request;
};

export const getLoggedUser = () => {
  if (localStorage.getItem("userLogged")) {
    return JSON.parse(localStorage.getItem("userLogged"));
  }
};

export const loggout = () => {
  localStorage.removeItem("userLogged");
  localStorage.removeItem("auth_token");
};
