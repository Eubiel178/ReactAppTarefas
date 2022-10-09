import Contexts from "../../../../contexts/Contexts";

//hooks
import { useContext, useEffect, useState } from "react";

//styled-components
import {
  HeaderContents,
  Button,
  Mode,
  Profile,
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
            <Profile background={mode ? "#5e10c4" : "#310bc7"}>
              <Button
                onClick={() => {
                  setProfile(!profile);
                }}
                border={mode ? "solid 2px #1F1F1F" : " solid 2px #3085d6"}
              >
                <BiUser style={{ fontSize: "25px" }} />
              </Button>

              {profile && (
                <div>
                  <ButtonClose>
                    <button
                      onClick={() => {
                        setProfile(!profile);
                      }}
                    >
                      <ImCancelCircle style={{ fontSize: "25px" }} />
                    </button>
                  </ButtonClose>

                  <InfoUser>
                    <BiUser style={{ fontSize: "25px" }} />
                    <p>
                      {user.name} - {user.id}
                    </p>
                  </InfoUser>

                  <InfoUser>
                    <MdOutlineAlternateEmail style={{ fontSize: "25px" }} />
                    <p>{user.email}</p>
                  </InfoUser>

                  <ButtonLoggout>
                    <button onClick={handleLogin}>Deslogar</button>
                  </ButtonLoggout>
                </div>
              )}
            </Profile>
          </section>
        </div>
        <Title color={mode ? "#B64FC8" : "#3085d6"}>ADICIONAR TAREFAS</Title>
      </HeaderContents>
    </header>
  );
};

export default Header;
