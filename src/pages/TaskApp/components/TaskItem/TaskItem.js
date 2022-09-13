import { FaTrashAlt } from "react-icons/fa";

import { Task } from "./Styles";

const TaskItem = ({ element, event, id }) => {
  return (
    <Task id={id} key={id}>
      <input type="checkbox" />
      <span>{element}</span>
      <button onClick={event}>
        <FaTrashAlt />
      </button>
    </Task>
  );
};

export default TaskItem;
