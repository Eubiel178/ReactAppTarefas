import { useContext } from "react";
import Contexts from "../../../../contexts/Contexts";
import { Task } from "./Styles";

const TaskItem = ({ task, id }) => {
  const { mode } = useContext(Contexts);

  return (
    <Task color={mode && "#B64FC8"} id={id} key={id}>
      {task}
    </Task>
  );
};

export default TaskItem;
