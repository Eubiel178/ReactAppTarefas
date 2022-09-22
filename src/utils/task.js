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
