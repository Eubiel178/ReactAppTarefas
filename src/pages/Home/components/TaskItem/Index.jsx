import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

//styled-components
import {
  TaskContainer,
  TaskDescription,
  Task,
  Text,
  Container,
  Progress,
  ActionContainer,
  PositionStyle,
  RemoveAndEdit,
  ButtonEdit,
  ButtonRemove,
} from "./Styles";

const TaskItem = ({
  array,
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
        <Task id={id} key={id}>
          <input
            type="checkbox"
            onClick={() => {
              setFinish(task);
            }}
            checked={isFinished === true && true}
          />
          <Text
            color={mode && "#B64FC8"}
            style={{ textDecoration: isFinished === true && "line-through" }}
          >
            {description}
          </Text>
        </Task>
      </TaskDescription>

      <Container>
        <Progress
          background={isFinished === true ? "#e0d2d4" : "#00A94C"}
          color={isFinished === true ? "#B64FC8" : "#fff"}
          width={isFinished === true ? "5em" : "7.4em"}
        >
          <p>{isFinished === true ? "Completa" : "Em andamento "}</p>
        </Progress>

        <ActionContainer>
          <PositionStyle style={{ display: array.length === 1 && "none" }}>
            <button
              style={{ visibility: index === 0 ? "hidden" : "initial" }}
              onClick={() => {
                position("up", task, index);
              }}
            >
              <AiOutlineArrowUp />
            </button>
            <button
              style={{
                visibility: index === array.length - 1 ? "hidden" : "initial",
              }}
              onClick={() => {
                position("bottom", task, index);
              }}
            >
              <AiOutlineArrowDown />
            </button>
          </PositionStyle>

          <RemoveAndEdit>
            <ButtonEdit
              color={mode ? "white" : "black"}
              style={{ color: mode && " #e0d2d4" }}
              onClick={() => {
                edited(task);
              }}
            >
              <BsPencil />
            </ButtonEdit>

            <ButtonRemove
              onClick={() => {
                remove(task);
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
