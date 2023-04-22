//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

import { ModalUrgencyTask } from "../../../../components/Index";

//styled-components

import {
  TaskContainer,
  TaskDescription,
  Task,
  ConcluedButton,
  ReadMoreActive,
  Container,
  ActionContainerInMobile,
  ActionContainer,
  PositionStyle,
  DivButtons,
  ButtonEdit,
  ButtonCancelEdit,
  ButtonRemove,
  UrgencyButtonBorder,
  Text,
} from "./Styles";

import { useState } from "react";

import {
  handlePosition,
  handleRemove,
  handleSetFinishTask,
} from "../../../../utils/frontend/task";
import { edit } from "../../../../utils/backend/task";

export const TaskItem = ({
  array,
  taskId,
  index,
  description,
  task,
  edited,
  cancelEdited,
  isFinished,
  id,
  editId,
  setEditId,
  setToDoList,
  setInput,
}) => {
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditUrgency = async (color) => {
    if (loading === false) {
      setLoading(true);
      const newArray = [...array];

      await edit({ urgency: color }, id);

      newArray[index].urgency = color;

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
        <>
          {window.screen.width <= 500 ? (
            <Task id={id} isReadMoreActive={isReadMoreActive}>
              <button
                onClick={() => {
                  window.screen.width <= 500 &&
                    handleSetFinishTask(
                      task,
                      taskId,
                      index,
                      setToDoList,
                      editId,
                      setInput,
                      setEditId
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
          ) : (
            <Text>
              <span>{newString[0]}</span>

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
            </Text>
          )}
        </>
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

      <TaskContainer style={{ display: isFinished === true && "none" }}>
        <UrgencyButtonBorder
          color={task.urgency}
          onClick={() => {
            setIsOpen(true);
          }}
        ></UrgencyButtonBorder>

        <TaskDescription>
          <ConcluedButton
            type="checkbox"
            onChange={() => {
              handleSetFinishTask(
                task,
                taskId,
                index,
                array,
                setToDoList,
                editId,
                setInput,
                setEditId
              );
            }}
            checked={isFinished === true && true}
          />

          {handleDescription(description)}
        </TaskDescription>

        <Container style={{ display: isReadMoreActive === true && "none" }}>
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
                    handleRemove(
                      task,
                      index,
                      array,
                      editId,
                      setToDoList,
                      setEditId
                    );
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
                    handleRemove(
                      task,
                      index,
                      array,
                      editId,
                      setToDoList,
                      setEditId
                    );
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
