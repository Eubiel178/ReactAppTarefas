import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AiOutlineLogin } from "react-icons/ai";

import {
  NavContainer,
  ClickAwayClose,
  NavItems,
  ButtonSwitchTheme,
  OpenNavBarContainer,
} from "./Styles";

//icons
import { CgUserList } from "react-icons/cg";
import { TbListCheck } from "react-icons/tb";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

//imports local
import { getSaveMode, saveMode } from "../../utils/frontend/mode";
import Contexts from "../../contexts/Contexts";
import Swal from "sweetalert2";
import { logOff } from "../../utils/backend/user";

export const NavBar = () => {
  const { mode, setMode, isOpen, setIsOpen, setAuth } = useContext(Contexts);

  const navigate = useNavigate();

  const handleLogOff = async () => {
    Swal.fire({
      title: "Deseja deslogar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      preConfirm: () => {
        logOff();
        Swal.fire("Usuario deslogado com sucesso!", "", "success");
        navigate("/");
        setAuth(false);
      },
    });
  };

  const handleMode = () => {
    setMode(!mode);

    saveMode(!mode);
  };

  return (
    <>
      <OpenNavBarContainer>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <AiOutlineMenu />
        </button>

        <button onClick={handleLogOff}>
          <AiOutlineLogin />
        </button>
      </OpenNavBarContainer>

      <NavContainer style={{ display: isOpen === false && "none" }}>
        <NavItems isOpen={isOpen}>
          <div>
            <li>
              <button onClick={() => setIsOpen(false)}>
                <span>
                  <IoClose />
                </span>
              </button>
            </li>
          </div>

          <div>
            <li>
              <button>
                <Link to="/home">
                  <span>
                    <AiOutlineHome />
                  </span>
                </Link>
              </button>
            </li>

            <li>
              <ButtonSwitchTheme
                onClick={() => {
                  handleMode();
                }}
              >
                <span>
                  {mode ? (
                    <MdLightMode style={{ color: "#f49e12" }} />
                  ) : (
                    <MdModeNight style={{ color: "#d4dee1" }} />
                  )}
                </span>
              </ButtonSwitchTheme>
            </li>

            <li>
              <button>
                <Link to="/home/list">
                  <span>
                    <CgUserList />
                  </span>
                </Link>
              </button>
            </li>

            <li>
              <button>
                <Link to="/home/list-checked">
                  <span>
                    <TbListCheck />
                  </span>
                </Link>
              </button>
            </li>
          </div>

          <div>
            <li>
              <Link to="/home/profile">
                <span>
                  <BiUser />
                </span>
              </Link>
            </li>
          </div>
        </NavItems>

        <ClickAwayClose
          style={{ display: isOpen === false && "none" }}
          onClick={() => setIsOpen(false)}
        ></ClickAwayClose>
      </NavContainer>
    </>
  );
};
