import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

import { Task, Text, IconsContainer, ButtonEdit, ButtonRemove } from "./Styles";
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
  const { mode } = useContext(Contexts);

  return (
    <Task id={id} key={id}>
      <div>
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
      </div>
      <IconsContainer>
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
      </IconsContainer>
    </Task>
  );
};

export default TaskItem;
