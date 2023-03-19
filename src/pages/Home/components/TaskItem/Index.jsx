import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";

//styled-components
import {
  TaskContainer,
  TaskDescription,
  Task,
  Text,
  Container,
  ActionContainer,
  PositionStyle,
  RemoveAndEdit,
  ButtonEdit,
  ButtonCancelEdit,
  ButtonRemove,
} from "./Styles";

const TaskItem = ({
  array,
  taskId,
  index,
  description,
  task,
  setFinish,
  edited,
  cancelEdited,
  remove,
  isFinished,
  id,
  position,
  editId,
}) => {
  const { mode } = useContext(Contexts);

  return (
    <TaskContainer>
      <TaskDescription>
        <Task id={id}>
          <input
            type="checkbox"
            onChange={() => {
              setFinish(task, taskId, index);
            }}
            checked={isFinished === true && true}
          />
          <Text
            color={mode ? "#B64FC8" : " #174b7a"}
            style={{ textDecoration: isFinished === true && "line-through" }}
          >
            {description}
          </Text>
        </Task>
      </TaskDescription>

      <Container>
        <ActionContainer>
          <PositionStyle color={mode ? "#B64FC8" : "#3085d6"}>
            <button
              style={{
                color: index === 0 && "#ccc",
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

          <RemoveAndEdit>
            {editId === taskId ? (
              <ButtonCancelEdit onClick={cancelEdited}>
                <MdOutlineBlock style={{ color: "red" }} />
              </ButtonCancelEdit>
            ) : (
              <ButtonEdit
                color={isFinished ? "#ccc" : mode ? "white" : "black"}
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
          </RemoveAndEdit>
        </ActionContainer>
      </Container>
    </TaskContainer>
  );
};

export default TaskItem;
