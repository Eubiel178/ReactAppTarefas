import { FaTrashAlt } from "react-icons/fa";

import { Task } from "./Styles";

const TaskItem = ({ task, event, id }) => {
  return (
    <Task id={id} key={id}>
      <input type="checkbox" />
      <span>{task}</span>
      <button onClick={event}>
        <FaTrashAlt />
      </button>
    </Task>
  );
};

export default TaskItem;
