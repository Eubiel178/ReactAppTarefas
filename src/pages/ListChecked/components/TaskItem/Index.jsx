//icons
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

//styled-components

import {
  TaskContainer,
  TaskDescription,
  Task,
  Text,
  ConcluedButton,
  ReadMoreActive,
  Container,
  ActionContainerInMobile,
  ActionContainer,
  PositionStyle,
  DivButtons,
  ButtonRemove,
} from "./Styles";

import { useState } from "react";

import {
  handlePosition,
  handleRemove,
  handleSetFinishTask,
} from "../../../../utils/frontend/task";
import { ModalUrgencyTask } from "../../../../components/Index";
import { edit } from "../../../../utils/backend/task";

const TaskItem = ({
  array,
  taskId,
  index,
  description,
  task,
  isFinished,
  id,
  setToDoList,
  toDoList,
}) => {
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditUrgency = async (color) => {
    const newArray = [...toDoList];
    if (loading === false) {
      setLoading(true);

      await edit({ urgency: color, isFinished: false }, id);

      newArray[index].isFinished = false;

      setToDoList(newArray);
      setIsOpen(false);
      setLoading(false);
    }
  };

  const handleDescription = (text) => {
    if (text.length > 110) {
      const newString = [
        text.substring(0, 110),
        text.substring(110, text.length),
      ];

      return (
        <Task id={id} isReadMoreActive={isReadMoreActive}>
          <button
            onClick={() => {
              window.screen.width <= 500 &&
                handleSetFinishTask(
                  task,
                  taskId,
                  index,
                  toDoList,
                  setToDoList,
                  "",
                  "",
                  "",
                  setIsOpen
                );
            }}
          >
            <span>{newString[0]}</span>

            <ReadMoreActive
              style={{ display: isReadMoreActive === false && "none" }}
            >
              {newString[1]}
            </ReadMoreActive>
          </button>

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
      return (
        <Text>
          <span>{text}</span>
        </Text>
      );
    }
  };

  return (
    <>
      <ModalUrgencyTask
        loading={loading}
        isOpenModal={isOpen}
        setIsOpenModal={setIsOpen}
        action={handleEditUrgency}
      />

      <TaskContainer style={{ display: isFinished === false && "none" }}>
        <TaskDescription>
          <ConcluedButton
            type="checkbox"
            onClick={() => {
              handleSetFinishTask(
                task,
                taskId,
                index,
                toDoList,
                setToDoList,
                "",
                "",
                "",
                setIsOpen
              );
            }}
            checked={isFinished === true && true}
          />

          {handleDescription(description)}
        </TaskDescription>

        <Container>
          {window.screen.width <= 500 ? (
            <ActionContainerInMobile>
              <button
                style={{
                  color: index === 0 ? "#686868" : "#0000FF",
                }}
                onClick={() => {
                  handlePosition("up", task, index, array, setToDoList);
                }}
              >
                <AiOutlineCaretUp />
              </button>

              <DivButtons>
                <ButtonRemove
                  onClick={() => {
                    handleRemove(task, index, toDoList, "", setToDoList, "");
                  }}
                >
                  <FaTrashAlt />
                </ButtonRemove>
              </DivButtons>

              <button
                style={{
                  color: index === array.length - 1 ? "#686868" : "#0000FF",
                }}
                onClick={() => {
                  handlePosition("bottom", task, index, array, setToDoList);
                }}
              >
                <AiOutlineCaretDown />
              </button>
            </ActionContainerInMobile>
          ) : (
            <ActionContainer>
              <PositionStyle>
                <button
                  style={{
                    color: index === 0 ? "#686868" : "#0000FF",
                  }}
                  onClick={() => {
                    handlePosition("up", task, index, array, setToDoList);
                  }}
                >
                  <AiOutlineCaretUp />
                </button>

                <button
                  style={{
                    color: index === array.length - 1 ? "#686868" : "#0000FF",
                  }}
                  onClick={() => {
                    handlePosition("bottom", task, index, array, setToDoList);
                  }}
                >
                  <AiOutlineCaretDown />
                </button>
              </PositionStyle>

              <DivButtons>
                <ButtonRemove
                  onClick={() => {
                    handleRemove(task, index, toDoList, "", setToDoList);
                  }}
                >
                  <FaTrashAlt />
                </ButtonRemove>
              </DivButtons>
            </ActionContainer>
          )}
        </Container>
      </TaskContainer>
    </>
  );
};

export default TaskItem;
