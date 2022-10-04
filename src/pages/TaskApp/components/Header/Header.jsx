import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";

import { HeaderContents, Button, Mode, Title } from "./Styles";

import { loggout } from "../../../../utils/user";

import { saveMode, getSaveMode } from "../../../../utils/mode";

import Contexts from "../../../../contexts/Contexts";
import { useEffect } from "react";

const Header = () => {
  const { setAuth, mode, setMode } = useContext(Contexts);

  const handleLogin = () => {
    Swal.fire({
      title: "Deseja deslogar?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Não",
      preConfirm: (value) => {
        if (value === true) {
          loggout();
          setAuth(false);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Usuario deslogado com sucesso");
      }
    });
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
      <HeaderContents background={mode ? "#1F1F1F" : "#3085d6"}>
        <div>
          <section>
            <Link to="/historic">
              <Button
                border={mode ? "solid 2px #1F1F1F" : " solid 2px #3085d6"}
              >
                Histórico
              </Button>
            </Link>

            <Mode
              onClick={handleMode}
              background={mode === false ? "black" : "#fff"}
              color={mode ? "black" : "white"}
            >
              {mode === false ? "Modo escuro" : "Modo claro"}
            </Mode>
          </section>
          <section>
            <Button
              border={mode ? "solid 2px #1F1F1F" : " solid 2px #3085d6"}
              onClick={handleLogin}
            >
              Deslogar
            </Button>
          </section>
        </div>
        <Title color={mode ? "#B64FC8" : "#3085d6"}>ADICIONAR TAREFAS</Title>
      </HeaderContents>
    </header>
  );
};

export default Header;
