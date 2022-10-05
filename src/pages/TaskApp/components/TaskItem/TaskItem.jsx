import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

import {
  TaskContainer,
  Task,
  Text,
  Container,
  Progress,
  ButtonEdit,
  ButtonRemove,
} from "./Styles";
import { useContext, useState } from "react";
import Contexts from "../../../../contexts/Contexts";

const TaskItem = ({
  task,
  remove,
  id,
  edit,
  isFinished,
  setFinishTask,
  position,
}) => {
  const { mode } = useContext(Contexts);

  return (
    <TaskContainer>
      <section>
        <Task id={id} key={id}>
          <input
            onClick={() => setFinishTask({ description: task, id: id })}
            type="checkbox"
            checked={isFinished}
          />
          <Text
            color={mode && "#B64FC8"}
            style={{ textDecoration: isFinished && "line-through" }}
          >
            {task}
          </Text>
        </Task>
      </section>

      <Container>
<<<<<<< HEAD
        <Progress background={isFinished ? "#e0d2d4" : inProgress && "#00A94C"}>
          <p>{isFinished ? "Completa" : inProgress && "Em andamento "}</p>
=======
        <Progress
          background={isFinished ? "#e0d2d4" : "#00A94C"}
          width={isFinished === false && "8em"}
        >
          <p>{isFinished ? "Completa" : "Em andamento "}</p>
>>>>>>> 370e603 (Alteracao no style)
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
          style={{ color: isFinished && " #e0d2d4" }}
          onClick={edit}
        >
          <BsPencil />
        </ButtonEdit>
        <ButtonRemove onClick={remove}>
          <FaTrashAlt />
        </ButtonRemove>
      </Container>
    </TaskContainer>
  );
};

export default TaskItem;
