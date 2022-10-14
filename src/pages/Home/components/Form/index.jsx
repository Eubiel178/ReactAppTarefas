import Contexts from "../../../../contexts/Contexts";
//hooks
import { useContext } from "react";

//styled-components
import { FormContainer, Button, Input } from "./styles";

const Form = ({ AddTask, setInput, input, isEdit }) => {
  const { mode } = useContext(Contexts);

  const handleTask = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={AddTask}>
      <FormContainer>
        <Input
          onChange={handleTask}
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={input}
          required
        />
        <Button
          backgroundButton={mode ? "#B64FC8" : " #3085d6"}
          buttonHover={mode ? "#6105d6" : "#3005d6"}
        >
          {isEdit !== "" ? "Atualizar" : "Salvar"}
        </Button>
      </FormContainer>
    </form>
  );
};

export default Form;
