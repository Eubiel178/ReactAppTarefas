import { Feedback } from "./Styles";

const SubTitle = () => {
  return (
    <Feedback>
      <h2>TAREFAS</h2>
      {localStorage.length === 0 && <p>Nenhuma tarefa foi adicionada</p>}
    </Feedback>
  );
};

export default SubTitle;
