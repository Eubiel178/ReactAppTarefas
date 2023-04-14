//icons
import { FaTrashAlt } from "react-icons/fa";

//libs

import Swal from "sweetalert2";

//styled-components
import {
  TaskContainer,
  TaskDescription,
  Task,
  ConcluedButton,
  TextInAndroid,
  Text,
  Container,
  ActionContainer,
  DivButtons,
  ButtonRemove,
} from "./Styles";

const TaskItem = ({
  array,
  taskId,
  index,
  description,
  task,
  handleFinish,
  edited,
  cancelEdited,
  remove,
  isFinished,
  id,
  position,
  editId,
}) => {
  const swalModal = () => {
    description.length > 110 &&
      Swal.fire({
        title: description,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "Fechar",
        cancelButtonColor: "#f27474",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
  };

  const handleDescription = (string) => {
    if (window.screen.width <= 500 && string.length > 110) {
      const newString = string.substring(0, 110);

      return newString + "...";
    } else {
      return string;
    }
  };

  return (
    <TaskContainer style={{ display: isFinished === false && "none" }}>
      <TaskDescription>
        <Task id={id}>
          <ConcluedButton
            type="checkbox"
            onChange={() => {
              handleFinish(task, taskId, index);
            }}
            checked={isFinished === true && true}
          />

          {window.screen.width <= 500 ? (
            <TextInAndroid
              onClick={swalModal}
              style={{ textDecoration: isFinished === true && "line-through" }}
            >
              {handleDescription(description)}
            </TextInAndroid>
          ) : (
            <Text
              style={{ textDecoration: isFinished === true && "line-through" }}
            >
              {handleDescription(description)}
            </Text>
          )}
        </Task>
      </TaskDescription>

      <Container>
        <ActionContainer>
          <DivButtons>
            <ButtonRemove
              onClick={() => {
                remove(task, index);
              }}
            >
              <FaTrashAlt />
            </ButtonRemove>
          </DivButtons>
        </ActionContainer>
      </Container>
    </TaskContainer>
  );
};

export default TaskItem;
