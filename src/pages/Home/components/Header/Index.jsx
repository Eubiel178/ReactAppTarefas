import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import { NavBar, Button, Mode, Title } from "./Styles";

//page utills
import { saveMode, getSaveMode } from "../../../../utils/mode";

//icons
import { BiUser } from "react-icons/bi";
import ModalProfile from "../ModalProfile/Index";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { mode, setMode, userJson } = useContext(Contexts);

  const handleMode = () => {
    setMode(!mode);

    saveMode(!mode);
  };

  useEffect(() => {
    const getMode = getSaveMode();

    if (getMode === "true") {
      setMode(true);
    } else {
      setMode(false);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <section>
        <NavBar background={mode ? "#1F1F1F" : "#3085d6"}>
          <section>
            <Mode
              onClick={handleMode}
              background={mode === false ? "black" : "#fff"}
              color={mode ? "black" : "white"}
            >
              {mode === false ? "Modo escuro" : "Modo claro"}
            </Mode>
          </section>

          <section>
            <div>
              <Button onClick={() => setModalIsOpen(true)}>
                <BiUser style={{ fontSize: "25px" }} />
              </Button>
              <ModalProfile
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                name={userJson.name}
                email={userJson.email}
                img={userJson.img}
                id={userJson._id}
              />
            </div>
          </section>
        </NavBar>
      </section>

      <section>
        <Title color={mode ? "#B64FC8" : "#3085d6"}>ADICIONAR TAREFAS</Title>
      </section>
    </header>
  );
};

export default Header;
