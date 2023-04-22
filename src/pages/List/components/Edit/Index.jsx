import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext } from "react";

//styled-components
import { FormContainer, Button, Input } from "./Styles";

export const EditForm = ({ setModalState, setInput, isEdit }) => {
  const { input } = useContext(Contexts);

  const handleModal = (event) => {
    event.preventDefault();

    setModalState(true);
  };

  const handleTask = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleModal}>
      <FormContainer id="form_add_task">
        <Input
          onChange={handleTask}
          type="text"
          name="tarefa"
          placeholder="Descrição da tarefa"
          value={input}
          required
        />

        <Button type="submit">
          <div>{isEdit !== "" ? "Atualizar" : "Salvar"}</div>
        </Button>
      </FormContainer>
    </form>
  );
};
