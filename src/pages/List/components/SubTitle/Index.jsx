//styled-components
import { Container, TitleContainer, Title, Button } from "./Styles";

//libs
import Swal from "sweetalert2";
import { remove } from "../../../../utils/backend/task";

export const SubTitle = ({ toDoList, setToDoList }) => {
  const clearList = async () => {
    const { value } = await Swal.fire({
      title: "Deseja remover todas as tarefas?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      showCloseButton: true,

      preConfirm: (value) => {
        return value;
      },
    });

    if (value === true) {
      const newArray = [...toDoList];

      try {
        await newArray.forEach(async (element) => {
          await remove(element._id);
        });

        Swal.fire("Bom trabalho!", "  ", "success");

        setToDoList([]);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado",
        });
      }
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
