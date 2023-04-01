//styled-components
import { Container, TitleContainer, Title, Button } from "./Styles";

//libs
import Swal from "sweetalert2";
import { remove } from "../../../../utils/task";

export const SubTitle = ({ toDoList }) => {
  const clearList = async () => {
    const completed = toDoList.filter((element) => {
      return element.isFinished === true;
    });

    if (toDoList.length > 0 && completed.length === toDoList.length) {
      Swal.fire("Bom Trabalho!", "Você completou todas as tarefa", "success");

      completed.forEach(async (element) => {
        await remove(element._id);
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
      <TitleContainer>
        <Title>TAREFAS</Title>
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
