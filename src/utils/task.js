export const addTask = (task) => {
  let list = [];

  if (localStorage.length) {
    list = taskList();
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  } else {
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  }
};

export const taskList = () => {
  if (localStorage.length) {
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
