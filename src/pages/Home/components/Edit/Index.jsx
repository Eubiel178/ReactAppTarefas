import Contexts from "../../../../contexts/Contexts";

import ReactLoading from "react-loading";

//hooks
import { useContext } from "react";

//styled-components
import { FormContainer, Button, Input } from "./Styles";

<<<<<<< HEAD
const EditForm = ({ AddTask, setInput, isEdit }) => {
=======
const EditForm = ({ AddTask, setInput, isEdit, load }) => {
>>>>>>> b4f17f380709b6957ce56e728757bdfa4d9d7cc1
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
<<<<<<< HEAD
        <Button type="submit">{isEdit !== "" ? "Atualizar" : "Salvar"}</Button>
=======

        {load ? (
          <Button>
            <ReactLoading
              height="1em"
              width="1em"
              type="spin"
              color="#ffffff"
            />
          </Button>
        ) : (
          <Button type="submit">
            <div>{isEdit !== "" ? "Atualizar" : "Salvar"}</div>
          </Button>
        )}
>>>>>>> b4f17f380709b6957ce56e728757bdfa4d9d7cc1
      </FormContainer>
    </form>
  );
};

export default EditForm;
