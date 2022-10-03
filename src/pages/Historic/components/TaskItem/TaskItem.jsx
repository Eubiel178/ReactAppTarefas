import { Task } from "./Styles";

const TaskItem = ({ task, id }) => {
  return (
    <Task id={id} key={id}>
      {task}
    </Task>
  );
};

export default TaskItem;
