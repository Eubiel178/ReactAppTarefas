export const addTask = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
