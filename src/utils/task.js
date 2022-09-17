export const addTask = (task) => {
  if (localStorage.length > 0) {
    let list = taskList();
    list.push(task);
    localStorage.setItem("tasks", JSON.stringify(list));
  } else {
    localStorage.setItem("tasks", JSON.stringify(task));
  }
};

export const taskList = () => {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem("tasks"));
  }
};
