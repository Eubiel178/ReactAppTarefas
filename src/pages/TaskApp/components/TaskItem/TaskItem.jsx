import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

import {
  Task,
  Text,
  SecondSection,
  Progress,
  ButtonEdit,
  ButtonRemove,
} from "./Styles";
import { useContext } from "react";
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
  const { mode, inProgress, setInProgress } = useContext(Contexts);

  const progress = () => {};

  return (
    <Task id={id} key={id}>
      <section>
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
      </section>

      <section>
        <SecondSection>
          <Progress
            onClick={() => setInProgress(!inProgress)}
            o
            background={
              isFinished ? "#e0d2d4" : inProgress ? "#00A94C" : "#464040"
            }
          >
            <p>
              {isFinished
                ? "Completa"
                : inProgress
                ? "Em andamento "
                : "Incompleta"}
            </p>
          </Progress>

          <div>
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
          </div>
        </SecondSection>
      </section>
    </Task>
  );
};

export default TaskItem;
