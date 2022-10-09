//hooks
import { useContext } from "react";

//contexts
import Contexts from "../../../../contexts/Contexts";

//styled-components
import { Task } from "./styles";

const TaskItem = ({ task, id }) => {
  const { mode } = useContext(Contexts);

  return (
    <Task color={mode && "#B64FC8"} id={id} key={id}>
      {task}
    </Task>
  );
};

export default TaskItem;
