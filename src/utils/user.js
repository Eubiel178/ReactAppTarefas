export const login = () => {
  if (localStorage.getItem("users")) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return [];
  }
};

export const register = (user) => {
  let users = [];

  if (localStorage.getItem("users")) {
    users = login();

    users.push(user);
  } else {
    users.push(user);
  }

  localStorage.setItem("users", JSON.stringify(users));
};

export const loggedInUser = (user) => {
  localStorage.setItem("userLogged", JSON.stringify(user));
};

export const getLoggedUser = () => {
  if (localStorage.getItem("userLogged")) {
    return JSON.parse(localStorage.getItem("userLogged"));
  }
};
