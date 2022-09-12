import { Container } from "./Styles";

function Form({ AddTask, setTask, task }) {
  return (
    <form onSubmit={AddTask}>
      <Container>
        <input
          onChange={(event) => setTask(event.target.value)}
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={task}
        />
        <button>Adicionar</button>
      </Container>
    </form>
  );
}

export default Form;
