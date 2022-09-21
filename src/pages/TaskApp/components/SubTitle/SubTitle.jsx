import { clearList, taskList } from "../../../../utils/task";

import Swal from "sweetalert2";

import { Feedback } from "./Styles";

const SubTitle = ({ list, setList }) => {
  const AllTasksCompleted = () => {
    let completed = list.filter((element) => {
      return element.isFinished === true;
    });

    return completed;
  };

  const ClearList = () => {
    const completed = AllTasksCompleted();

    if (list.length > 0 && completed.length === list.length) {
      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      clearList();
    } else if (list.length === 0) {
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

    setList(taskList());
  };

  return (
    <Feedback>
      <h2>TAREFAS</h2>

      <button onClick={ClearList}>Limpar Lista</button>
    </Feedback>
  );
};

export default SubTitle;
