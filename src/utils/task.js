export const list = () => {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [];
  }
};

export const remove = (taskid) => {
  let taskList = list();

  let newList = taskList.filter((task) => {
    return taskid !== task.id;
  });

  localStorage.setItem("tasks", JSON.stringify(newList));
};

export const add = (task) => {
  let taskList = [];

  if (localStorage.getItem("tasks")) {
    taskList = list();
    taskList.push(task);
  } else {
    taskList.push(task);
  }

  localStorage.setItem("tasks", JSON.stringify(taskList));
};

export const edit = (task, id) => {
  const taskList = list();

  let mirror = [...taskList];

  const target = mirror.findIndex((element) => {
    return element.id === id;
  });

  mirror[target].description = task.description;
  mirror[target].isFinished = task.isFinished ? task.isFinished : false;

  localStorage.setItem("tasks", JSON.stringify(mirror));
};

export const clear = () => {
  localStorage.removeItem("tasks");
};

export const getSavedTasks = () => {
  if (localStorage.getItem("Historic")) {
    return JSON.parse(localStorage.getItem("Historic"));
  }
};

export const saveCompletedTasks = (task) => {
  let tasks = [];

  if (localStorage.getItem("Historic")) {
    tasks = getSavedTasks();

    tasks.push(task);
  } else {
    tasks.push(task);
  }

  localStorage.setItem("Historic", JSON.stringify(tasks));
};

export const clearHistoric = () => {
  localStorage.removeItem("Historic");
};
