import { FaTrashAlt } from "react-icons/fa";

import { Task } from "./Styles";

function TaskItem({ tasks, element, event, id, key }) {
  return (
    <Task id={id} key={key}>
      <input type="checkbox" />
      <span>{element}</span>
      <button onClick={event}>
        <FaTrashAlt />
      </button>
    </Task>
  );
}

export default TaskItem;
