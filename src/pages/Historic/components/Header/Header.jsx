import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";

import { NavBar, Button, Mode, TitleContainer } from "./Styles";

import Swal from "sweetalert2";
import Contexts from "../../../../contexts/Contexts";
import { getSaveMode, saveMode } from "../../../../utils/mode";
import { getTask } from "../../../../utils/task";

const Header = () => {
  const { setMode, mode } = useContext(Contexts);

  const clear = () => {
    const completed = [];
    if (completed.length > 0) {
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

        preConfirm: (value) => {
          if (value === true) {
            const list = getTask();

            list.forEach((element) => {
              console.log(element);
            });
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

        <button onClick={clear}>Limpar Lista</button>
      </TitleContainer>
    </header>
  );
};

export default Header;
