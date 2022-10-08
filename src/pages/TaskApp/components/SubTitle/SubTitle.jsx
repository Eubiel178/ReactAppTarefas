import Swal from "sweetalert2";

import { Container } from "./Styles";

import { useContext } from "react";

import Contexts from "../../../../contexts/Contexts";
import { remove } from "../../../../utils/task";

const SubTitle = ({ toDoList, setToDoList, renderList }) => {
  const { mode } = useContext(Contexts);

  const clearList = () => {
    const completed = toDoList.filter((element) => {
      return element.shelf === 2;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      toDoList.forEach((element) => {
        remove(element.id);
      });

      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");
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
  };

  return (
    <Container colorSubTitle={mode ? "#B64FC8" : " #3085d6"}>
      <h2>TAREFAS</h2>
      <button
        style={{ display: toDoList.length === 0 && "none" }}
        onClick={clearList}
      >
        Limpar Lista
      </button>
    </Container>
  );
};

export default SubTitle;
