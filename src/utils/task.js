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

export const removeTask = (taskid) => {
  let list = taskList();

  let newList = list.filter((task) => {
    return taskid !== task.id;
  });

  localStorage.setItem("tasks", JSON.stringify(newList));
};

export const taskEdit = (task, setInput) => {
  setInput(task.taskDescription);
};
