import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext, useEffect } from "react";

//styled-components
import { NavBar, Button, Mode, TitleContainer, Title, Clear } from "./styles";

//libs
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

//page utills
import { getSaveMode, saveMode } from "../../../../utils/mode";
import { remove } from "../../../../utils/task";

const Header = ({ list, renderList }) => {
  const { setMode, mode } = useContext(Contexts);

  const clearList = async () => {
    if (list.length > 0) {
      const swalAlert = await Swal.fire({
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
            list.map(async (element) => {
              await remove(element.id);
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
    renderList();

    let getMode = getSaveMode();

    if (getMode === "true") {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [list]);

  return (
    <header>
      <section>
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
      </section>

      <section>
        <TitleContainer>
          <Title color={mode ? "#B64FC8" : " #3085d6"}>
            Tarefas Concluídas
          </Title>

          {list.length > 0 && <Clear onClick={clearList}>Limpar Lista</Clear>}
        </TitleContainer>
      </section>
    </header>
  );
};

export default Header;
