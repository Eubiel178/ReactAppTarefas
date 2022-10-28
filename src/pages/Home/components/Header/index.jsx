import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import {
  NavBar,
  Button,
  Mode,
  User,
  ButtonClose,
  InfoUser,
  ButtonLoggout,
  Title,
} from "./styles";

//libs
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//page utills
import { getLoggedUser, loggout } from "../../../../utils/user";
import { saveMode, getSaveMode } from "../../../../utils/mode";

//icons
import { BiUser } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Header = () => {
  const { setAuth, mode, setMode } = useContext(Contexts);
  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState([]);

  const handleLogin = () => {
    Swal.fire({
      title: "Deseja deslogar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
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

  const handleUser = async () => {
    const user = await getLoggedUser();

    setUser(user);
  };

  useEffect(() => {
    let getMode = getSaveMode();

    if (getMode === "true") {
      setMode(true);
    } else {
      setMode(false);
    }

    handleUser();
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
              <Button
                onClick={() => {
                  setProfile(true);
                }}
                border={mode ? "solid 2px #1F1F1F" : " solid 2px #3085d6"}
                style={{ display: profile && "none" }}
              >
                <BiUser style={{ fontSize: "25px" }} />
              </Button>
            </div>

            {profile && (
              <User>
                <ButtonClose>
                  <p>Informações do usuário</p>
                  <button
                    onClick={() => {
                      setProfile(false);
                    }}
                  >
                    <ImCancelCircle style={{ fontSize: "25px" }} />
                  </button>
                </ButtonClose>

                <InfoUser>
                  <BiUser style={{ fontSize: "25px" }} />
                  <p>{user.name}</p>
                </InfoUser>

                <InfoUser>
                  <MdOutlineAlternateEmail style={{ fontSize: "25px" }} />
                  <p>{user.email}</p>
                </InfoUser>

                <ButtonLoggout>
                  <button onClick={handleLogin}>Deslogar</button>
                </ButtonLoggout>
              </User>
            )}
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
