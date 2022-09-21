export const login = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
};

export const registerUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));

  let getUser = login();

  if (getUser) {
    return true;
  }
};
