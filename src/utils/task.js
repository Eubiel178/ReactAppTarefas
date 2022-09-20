export const taskList = () => {
  if (localStorage.getItem("tasks")) {
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

export const taskEdit = (task, id) => {
  const list = taskList();

  let mirror = [...list];

  const target = mirror.findIndex((element) => {
    return element.id === id;
  });

  mirror[target].description = task.description;

  localStorage.setItem("tasks", JSON.stringify(mirror));
};
