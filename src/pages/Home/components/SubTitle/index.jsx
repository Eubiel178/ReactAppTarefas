import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//styled-components
import { Container, Title, Button } from "./styles";

//libs
import Swal from "sweetalert2";

//page utills
import { edit } from "../../../../utils/task";

const SubTitle = ({ toDoList, setToDoList, renderList }) => {
  const { mode } = useContext(Contexts);

  const clearList = async () => {
    const completed = toDoList.filter((element) => {
      return element.shelf === 2;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      toDoList.forEach(async (element) => {
        await edit({ shelf: 3 }, element.id);
      });

      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      renderList();
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
    <Container>
      <Title colorTitle={mode ? "#B64FC8" : " #3085d6"}>TAREFAS</Title>
      <Button
        style={{ display: toDoList.length === 0 && "none" }}
        onClick={clearList}
      >
        Limpar Lista
      </Button>
    </Container>
  );
};

export default SubTitle;
