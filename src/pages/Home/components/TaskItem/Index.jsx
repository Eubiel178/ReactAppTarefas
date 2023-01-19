import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

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
  remove,
  isFinished,
  id,
  position,
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
            color={mode === true ? "#B64FC8" : "black"}
            style={{ textDecoration: isFinished === true && "line-through" }}
          >
            {description}
          </Text>
        </Task>
      </TaskDescription>

      <Container>
        <ActionContainer>
          <PositionStyle>
            <button
              style={{ color: index === 0 ? "#e0d2d4" : "#3085d6" }}
              onClick={() => {
                position("up", task, index);
              }}
            >
              <AiOutlineCaretUp />
            </button>

            <button
              style={{
                color: index === array.length - 1 ? "#e0d2d4" : "#3085d6",
              }}
              onClick={() => {
                position("bottom", task, index);
              }}
            >
              <AiOutlineCaretDown />
            </button>
          </PositionStyle>

          <RemoveAndEdit>
            <ButtonEdit
              color={mode ? "white" : "black"}
              style={{ color: mode && "#e0d2d4" }}
              onClick={() => {
                edited(task);
              }}
            >
              <BsPencil />
            </ButtonEdit>

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
