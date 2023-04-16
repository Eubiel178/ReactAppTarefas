import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import {
  NavContainer,
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
import { getSaveMode, saveMode } from "../../utils/mode";
import Contexts from "../../contexts/Contexts";
import { ModalProfile } from "../Index";

export const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { mode, setMode, userJson, isOpen, setIsOpen } = useContext(Contexts);

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
    <>
      <OpenNavBarContainer
        isOpen={isOpen}
        style={{ visibility: isOpen === true && "hidden" }}
      >
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span>
            <AiOutlineMenu />
          </span>
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
                <span>{mode ? <MdLightMode /> : <MdModeNight />}</span>
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
              <button onClick={() => setModalIsOpen(!modalIsOpen)}>
                <span>
                  <BiUser />
                </span>
              </button>

              <ModalProfile
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                name={userJson.name}
                email={userJson.email}
                img={userJson.img}
                id={userJson._id}
              />
            </li>
          </div>
        </NavItems>
      </NavContainer>
    </>
  );
};
