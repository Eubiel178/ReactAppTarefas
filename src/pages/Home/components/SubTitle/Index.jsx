import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//styled-components
import {
  Container,
  TitleContainer,
  Title,
  CompletedTasks,
  Button,
} from "./Styles";

//libs
import Swal from "sweetalert2";
import { remove } from "../../../../utils/task";

const SubTitle = ({
  toDoList,
  completedTask,
  setToDoList,
  handleCompletedTask,
}) => {
  const { mode } = useContext(Contexts);

  const clearList = async () => {
    const completed = toDoList.filter((element) => {
      return element.isFinished === true;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      const newArray = [];

      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      completed.forEach(async (element) => {
        await remove(element._id);
      });

      setToDoList(newArray);
      handleCompletedTask(newArray);
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
      <TitleContainer>
        <Title colorTitle={mode ? "#B64FC8" : " #3085d6"}>TAREFAS</Title>

        <CompletedTasks>
          tarefas concluídas: {completedTask > 0 ? completedTask : "0"}
        </CompletedTasks>
      </TitleContainer>

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
