import Contexts from "../../../../contexts/Contexts";

import ReactLoading from "react-loading";

//hooks
import { useContext } from "react";

//styled-components
import { FormContainer, Button, Input } from "./Styles";

const EditForm = ({ AddTask, setInput, isEdit, load }) => {
  const { input } = useContext(Contexts);

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
        <Button type="submit">{isEdit !== "" ? "Atualizar" : "Salvar"}</Button>
      </FormContainer>
    </form>
  );
};

export default EditForm;
