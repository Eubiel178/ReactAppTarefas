import { Container } from "./Styles";

import { v4 as uuidv4 } from "uuid";

const Form = ({ AddTask, setTask, setInput, input }) => {
  let id = uuidv4();

  const Task = (event) => {
    setTask({
      taskDescription: event.target.value,
      id: id,
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
          onFocus={Task}
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
