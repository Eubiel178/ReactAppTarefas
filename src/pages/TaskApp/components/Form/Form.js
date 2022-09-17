import { Container } from "./Styles";

import { v4 as uuid } from "uuid";

const Form = ({ AddTask, setTask, setInput, input }) => {
  const Task = (event) => {
    setTask({
      taskDescription: event.target.value,
      id: uuid,
      isFinished: false,
      userID: "",
    });

    setInput(event.target.value);
  };

  return (
    <form onSubmit={AddTask}>
      <Container>
        <input
          onChange={Task}
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={input}
        />
        <button>Adicionar</button>
      </Container>
    </form>
  );
};

export default Form;
