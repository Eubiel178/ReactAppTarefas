import { clear, list } from "../../../../utils/task";

import Swal from "sweetalert2";

import { Feedback } from "./Styles";

const SubTitle = ({ toDoList, setToDoList }) => {
  const AllTasksCompleted = () => {
    let completed = toDoList.filter((element) => {
      return element.isFinished === true;
    });

    return completed;
  };

  const clearList = () => {
    const completed = AllTasksCompleted();

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      clear();
    } else if (toDoList.length === 0) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Nenhuma tarefa adicionada",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Você não completou todas as tarefa!",
      });
    }

    setToDoList(list());
  };

  return (
    <Feedback>
      <h2>TAREFAS</h2>

      <button
        style={{ display: toDoList.length === 0 && "none" }}
        onClick={clearList}
      >
        Limpar Lista
      </button>
    </Feedback>
  );
};

export default SubTitle;
