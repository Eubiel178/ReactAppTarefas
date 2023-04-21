//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

//libs

//styled-components
import {
  TaskContainer,
  TaskDescription,
  Task,
  ConcluedButton,
  ReadMoreActive,
  Container,
  ActionContainer,
  PositionStyle,
  DivButtons,
  ButtonEdit,
  ButtonCancelEdit,
  ButtonRemove,
} from "./Styles";
import { useState } from "react";

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
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);

  const handleDescription = (text) => {
    if (text.length > 110) {
      const newString = [
        text.substring(0, 110) + " ",
        text.substring(110, text.length),
      ];

      return (
        <Task id={id}>
          {newString[0]}
          <ReadMoreActive
            style={{ display: isReadMoreActive === false && "none" }}
          >
            {newString[1]}
          </ReadMoreActive>
          <button
            onClick={() => {
              setIsReadMoreActive(!isReadMoreActive);
            }}
          >
            {isReadMoreActive ? "Ler menos" : "Ler mais..."}
          </button>
        </Task>
      );
    } else {
      return <Task>{text}</Task>;
    }
  };

  return (
    <TaskContainer
      style={{ display: isFinished === true && "none" }}
      activeReadMore={isReadMoreActive}
      color={task.urgency}
    >
      <TaskDescription>
        <ConcluedButton
          type="checkbox"
          onChange={() => {
            handleFinish(task, taskId, index);
          }}
          checked={isFinished === true && true}
        />

        <> {handleDescription(description)}</>
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
                color: index === array.length - 1 && "#686868",
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
                <a href="#form_add_task">
                  <BsPencil />
                </a>
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
