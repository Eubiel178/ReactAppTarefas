import { FaTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

import { Task, Text, IconsContainer, ButtonEdit, ButtonRemove } from "./Styles";

const TaskItem = ({ task, remove, id, edit, isFinished, setFinishTask }) => {
  return (
    <Task id={id} key={id}>
      <input
        onClick={() => setFinishTask({ description: task, id: id })}
        type="checkbox"
        checked={isFinished}
      />
      <Text style={{ textDecoration: isFinished && "line-through" }}>
        {task}
      </Text>
      <IconsContainer>
        <ButtonEdit onClick={edit}>
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
