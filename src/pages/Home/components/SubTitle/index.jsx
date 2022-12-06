import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//styled-components
import { Container, Title, Button } from "./styles";

//libs
import Swal from "sweetalert2";
import { remove } from "../../../../utils/task";

const SubTitle = ({ toDoList, setToDoList, renderList }) => {
  const { mode } = useContext(Contexts);

  const clearList = async () => {
    const completed = toDoList.filter((element) => {
      return element.isFinished === true;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      toDoList.forEach(async (element) => {
        remove(element._id);
      });

      renderList();
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
