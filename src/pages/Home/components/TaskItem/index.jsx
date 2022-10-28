import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//icons
import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

//styled-components
import {
  TaskContainer,
  Task,
  Text,
  Container,
  Progress,
  ButtonEdit,
  ButtonRemove,
} from "./styles";

const TaskItem = ({
  task,
  description,
  id,
  setFinish,
  edited,
  remove,
  isFinished,
}) => {
  const { mode } = useContext(Contexts);

  const editTask = () => {
    edited(task);
  };

  const removeTask = async () => {
    remove(task);
  };

  return (
    <TaskContainer>
      <section>
        <Task id={id} key={id}>
          <input
            type="radio"
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
      </section>

      <Container>
        <Progress
          background={isFinished === true ? "#e0d2d4" : "#00A94C"}
          color={isFinished === true ? "#B64FC8" : "#fff"}
          width={isFinished === true ? "5em" : "7.4em"}
        >
          <p>{isFinished === true ? "Completa" : "Em andamento "}</p>
        </Progress>

        {/*        <button
            onClick={() => {
              position(id, "up");
            }}
          >
            ⬆
          </button>
          <button>⬇</button> */}

        <ButtonEdit
          color={mode && "white"}
          style={{ color: mode && " #e0d2d4" }}
          onClick={editTask}
        >
          <BsPencil />
        </ButtonEdit>
        <ButtonRemove
          onClick={() => {
            removeTask();
          }}
        >
          <FaTrashAlt />
        </ButtonRemove>
      </Container>
    </TaskContainer>
  );
};

export default TaskItem;
