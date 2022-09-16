import { Feedback } from "./Styles";

const SubTitle = ({ tasks }) => {
  return (
    <Feedback>
      <h2>TAREFAS</h2>
      {tasks === "" && <p>Nenhuma tarefa foi adicionada</p>}
    </Feedback>
  );
};

export default SubTitle;
