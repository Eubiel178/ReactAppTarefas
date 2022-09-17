export const addTask = (task) => {
  let list = [];
  if (localStorage.length > 0) {
    list = taskList();
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  } else {
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  }
};

export const taskList = () => {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem("tasks"));
  }
};

export const removeTask = () => {
  //if (condition) {
  //}
};
