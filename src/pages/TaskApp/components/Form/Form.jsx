import { Container } from "./Styles";

import { v4 as uuidv4 } from "uuid";

const Form = ({ AddTask, setTask, setInput, input, isEdit }) => {
  let id = uuidv4();

  const Task = (event) => {
    setTask({
      description: event.target.value,
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
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={input}
          required
        />
        <button>{isEdit !== "" ? "Atualizar" : "Salvar"}</button>
      </Container>
    </form>
  );
};

export default Form;
