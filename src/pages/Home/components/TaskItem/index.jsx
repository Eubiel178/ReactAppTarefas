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

const TaskItem = ({ task, setFinish, edited, remove }) => {
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
        <Task id={task.id} key={task.id}>
          <input
            type="radio"
            onClick={() => {
              setFinish(task);
            }}
            checked={task.shelf === 2 && true}
          />
          <Text
            color={mode && "#B64FC8"}
            style={{ textDecoration: task.shelf === 2 && "line-through" }}
          >
            {task.title}
          </Text>
        </Task>
      </section>

      <Container>
        <Progress
          background={task.shelf === 2 ? "#e0d2d4" : "#00A94C"}
          color={task.shelf === 2 ? "#B64FC8" : "#fff"}
          width={task.shelf === 2 ? "6em" : "8em"}
        >
          <p>{task.shelf === 2 ? "Completa" : "Em andamento "}</p>
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
