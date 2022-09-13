import { Feedback } from "./Styles";

const SubTitle = ({ localGet }) => {
  return (
    <Feedback>
      <h2>TAREFAS</h2>
      {localGet == undefined && <p>Nenhuma tarefa foi adicionada</p>}
    </Feedback>
  );
};

export default SubTitle;
