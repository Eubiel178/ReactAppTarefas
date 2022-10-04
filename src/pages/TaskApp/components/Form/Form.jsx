import { Container } from "./Styles";

import { v4 as uuidv4 } from "uuid";

import { getLoggedUser } from "../../../../utils/user";
import { useContext } from "react";
import Contexts from "../../../../contexts/Contexts";

const Form = ({ AddTask, setTask, setInput, input, isEdit }) => {
  const { mode } = useContext(Contexts);
  const id = uuidv4();
  const user = getLoggedUser();

  const handleTask = (event) => {
    setTask({
      description: event.target.value,
      id: id,
      isFinished: false,
      userID: user[0].id,
    });

    setInput(event.target.value);
  };

  return (
    <form onSubmit={AddTask}>
      <Container
        backgroundButton={mode ? "#B64FC8" : " #3085d6"}
        buttonHover={mode ? "#6105d6" : "#3005d6"}
      >
        <input
          onChange={handleTask}
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
