export const saveMode = (mode) => {
  localStorage.setItem("mode", mode);
};

export const getSaveMode = () => {
  if (localStorage.getItem("mode")) {
    return localStorage.getItem("mode");
  }
};
