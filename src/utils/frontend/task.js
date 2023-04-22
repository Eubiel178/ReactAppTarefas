import { edit, remove } from "../backend/task";
import { swalModal } from "./swalModal";

export const handleRemove = async (
  task,
  index,
  toDoList,
  editId,
  setToDoList,
  setEditId
) => {
  const newArray = [...toDoList];

  if (task._id === editId) {
    const { value } = await swalModal(
      "Essa tarefa esta sendo editada no momento! Deseja remover essa tarefa?"
    );

    if (value === true) {
      setEditId("");
      await remove(task._id);

      newArray.splice(index, 1);
      setToDoList(newArray);
    }
  } else {
    const { value } = await swalModal("Deseja remover essa tarefa?");

    if (value === true) {
      await remove(task._id);
      newArray.splice(index, 1);
      setToDoList(newArray);
    }
  }
};

export const handleSetFinishTask = async (
  task,
  taskId,
  index,
  toDoList,
  setToDoList,
  editId,
  setInput,
  setEditId,
  setIsOpen
) => {
  if (editId === task._id) {
    const { value } = await swalModal(
      "Essa tarefa esta sendo editada. Deseja cancelar edição e finalizar a tarefa?"
    );

    if (value === true) {
      setEditId("");
      setInput("");

      const newArray = [...toDoList];

      await edit({ isFinished: true }, taskId);

      newArray[index].isFinished = true;

      setToDoList(newArray);
    }
  } else if (task.isFinished === false) {
    const { value } = await swalModal(
      "Deseja mesmo marcar esta tarefa como concluida?"
    );

    if (value === true) {
      const newArray = [...toDoList];

      await edit({ isFinished: true, urgency: "#90ee90" }, taskId);

      newArray[index].isFinished = true;

      setToDoList(newArray);
    }
  } else if (task.isFinished === true) {
    const { value } = await swalModal(
      "Deseja mesmo marcar esta tarefa como não concluída?"
    );

    if (value === true) {
      setIsOpen(true);
    }
  }
};

export const handlePosition = async (
  pos,
  task,
  index,
  toDoList,
  setToDoList
) => {
  if (pos === "up" || pos === "bottom") {
    const newArray = [...toDoList];

    if (pos === "up" && index > 0) {
      const topTask = newArray[index - 1];

      newArray[topTask] = task.index;
      newArray[index] = topTask.index;
      newArray.splice(index, 1);
      newArray.splice(index - 1, 0, task);

      setToDoList(newArray);

      await edit({ index: task.index }, topTask._id);
      await edit({ index: topTask.index }, task._id);
    }

    if (pos === "bottom" && index < newArray.length - 1) {
      const bottomTask = newArray[index + 1];

      newArray[bottomTask] = task.index;
      newArray[index] = bottomTask.index;
      newArray.splice(index, 1);
      newArray.splice(index + 1, 0, task);

      setToDoList(newArray);

      await edit({ index: task.index }, bottomTask._id);
      await edit({ index: bottomTask.index }, task._id);
    }
  }
};
