import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext, useEffect } from "react";

//styled-components
import { NavBar, Button, Mode, TitleContainer } from "./styles";

//libs
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

//page utills
import { getSaveMode, saveMode } from "../../../../utils/mode";
import { clearHistoric } from "../../../../utils/task";

const Header = ({ list, renderList }) => {
  const { setMode, mode } = useContext(Contexts);

  const clearList = () => {
    if (list.length > 0) {
      Swal.fire({
        title: "Deseja limpar o histórico?",
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        showCloseButton: true,

        preConfirm: async (value) => {
          if (value === true) {
            clearHistoric();
            renderList();
          }
        },
      });
    }
  };

  const handleMode = () => {
    setMode(!mode);

    saveMode(!mode);
  };

  useEffect(() => {
    let getMode = getSaveMode();

    if (getMode === "true") {
      setMode(true);
    } else {
      setMode(false);
    }
  }, []);

  return (
    <header>
      <NavBar background={mode ? "#1F1F1F" : "#3085d6"}>
        <Link to="/">
          <Button border={mode ? "solid 2px #1F1F1F" : " solid 2px #3085d6"}>
            Início
          </Button>
        </Link>

        <Mode
          onClick={handleMode}
          background={mode === false ? "black" : "#fff"}
          color={mode ? "black" : "white"}
        >
          {mode === false ? "Modo escuro" : "Modo claro"}
        </Mode>
      </NavBar>

      <TitleContainer color={mode ? "#B64FC8" : " #3085d6"}>
        <h1>Tarefas Concluídas</h1>

        {list && <button onClick={clearList}>Limpar Lista</button>}
      </TitleContainer>
    </header>
  );
};

export default Header;
