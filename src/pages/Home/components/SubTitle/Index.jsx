//styled-components
import {
  Container,
  TitleContainer,
  Title,
  CompletedTasks,
  RemainingTasks,
  Button,
} from "./Styles";

//libs
import Swal from "sweetalert2";
import { remove } from "../../../../utils/task";

const SubTitle = ({
  toDoList,
  completedTask,
  setToDoList,
  setCompletedTask,
  remainingTasks,
}) => {
  const clearList = async () => {
    const completed = toDoList.filter((element) => {
      return element.isFinished === true;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      completed.forEach(async (element) => {
        await remove(element._id);
      });

      setToDoList([]);
      setCompletedTask([]);
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
        <Title>TAREFAS</Title>

        <CompletedTasks>
          Tarefas concluídas: {completedTask > 0 ? completedTask : "0"}
        </CompletedTasks>

        <RemainingTasks>
          Tarefas restantes: {remainingTasks > 0 ? remainingTasks : "0"}
        </RemainingTasks>
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
