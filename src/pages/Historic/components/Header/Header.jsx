import { Link } from "react-router-dom";

import { useContext } from "react";

import { ButtonContainer, Button, Mode, TitleContainer } from "./Styles";
import { clearHistoric, getSavedTasks } from "../../../../utils/task";

import Swal from "sweetalert2";
import Contexts from "../../../../contexts/Contexts";

const Header = ({ set }) => {
  const { setMode, mode } = useContext(Contexts);

  const clear = () => {
    let completed = getSavedTasks();

    if (completed.length > 0) {
      Swal.fire({
        title: "Deseja limpar o histórico?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "confirmar",
        cancelButtonText: "cancel",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: (value) => {
          if (value === true) {
            clearHistoric();

            set("");
          }
        },
      });
    }
  };

  return (
    <header>
      <>
        <ButtonContainer>
          <Link to="/">
            <Button>Inicio</Button>
          </Link>

          <Mode
            onClick={() => setMode(!mode)}
            background={mode === false ? "black" : "#fff"}
            color={mode ? "black" : "white"}
          >
            {mode === false ? "Modo escuro" : "Modo claro"}
          </Mode>
        </ButtonContainer>

        <TitleContainer>
          <h1>Tarefas Concluídas</h1>

          <button onClick={clear}>Limpar Lista</button>
        </TitleContainer>
      </>
    </header>
  );
};

export default Header;
