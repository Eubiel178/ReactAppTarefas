export const removeTask = (taskid) => {
  let list = taskList();

  let newList = list.filter((task) => {
    return taskid !== task.id;
  });

  localStorage.setItem("tasks", JSON.stringify(newList));
};

export const addTask = (task) => {
  let list = [];

  if (localStorage.getItem("tasks")) {
    list = taskList();
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  } else {
    list.push(task);

    localStorage.setItem("tasks", JSON.stringify(list));
  }
};

export const taskList = () => {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  }
};

export const taskEdit = (task) => {
  let list = taskList();

  let taskEdit = list.filter((element) => {
    return task.id == element.id;
  });

  return taskEdit;
};
