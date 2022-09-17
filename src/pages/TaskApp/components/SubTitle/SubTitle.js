import { Feedback } from "./Styles";

const SubTitle = ({ toDoList }) => {
  return (
    <Feedback>
      <h2>TAREFAS</h2>
      {toDoList.length === 0 && <p>Nenhuma tarefa foi adicionada</p>}
    </Feedback>
  );
};

export default SubTitle;
