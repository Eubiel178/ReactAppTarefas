//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

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
  PositionStyle,
  DivButtons,
  ButtonEdit,
  ButtonCancelEdit,
  ButtonRemove,
} from "./Styles";

export const TaskItem = ({
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
    <TaskContainer style={{ display: isFinished === true && "none" }}>
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
          <PositionStyle>
            <button
              style={{
                color: index === 0 && "#686868",
              }}
              onClick={() => {
                position("up", task, index);
              }}
            >
              <AiOutlineCaretUp />
            </button>

            <button
              style={{
                color: index === array.length - 1 && "#ccc",
              }}
              onClick={() => {
                position("bottom", task, index);
              }}
            >
              <AiOutlineCaretDown />
            </button>
          </PositionStyle>

          <DivButtons>
            {editId === taskId ? (
              <ButtonCancelEdit onClick={cancelEdited}>
                <MdOutlineBlock />
              </ButtonCancelEdit>
            ) : (
              <ButtonEdit
                style={{ color: isFinished && "#686868" }}
                onClick={() => {
                  edited(task);
                }}
              >
                <BsPencil />
              </ButtonEdit>
            )}

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
