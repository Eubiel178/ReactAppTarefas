import { useContext, useState, useEffect } from "react";

import { BiUser } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

import {
  ContainerModal,
  Header,
  Loggout,
  ImageContainer,
  InfoUser,
  UserItem,
  Action,
} from "./Styles";

import Contexts from "../../contexts/Contexts";
import { editUser, getOne, logOff } from "../../utils/user";

import Photo from "../../images/profile.jpg";

import Modal from "react-modal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const ModalProfile = ({
  modalIsOpen,
  setModalIsOpen,
  name,
  email,
  img,
  id,
}) => {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState("");
  const { setAuth, setUserJson, mode } = useContext(Contexts);
  const navigate = useNavigate();

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: mode ? "rgb(0 0 0 / 72%)" : "rgba(255, 255, 255, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "30em",
      width: "22em",
      backgroundColor: mode ? "#282A36" : "#E1E1E1",
      border: "1px solid rgb(0 0 0 / 44%)",
      boxShadow: "6px 6px 8px #00000030",
      transitionDuration: "5s",
      // : `${animateModal} 1s linear infinite`,
    },
  };

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertImageToBase64(file);
    }
  };

  const handleOnSave = async () => {
    setEdit(!edit);

    if (image && edit === true) {
      try {
        await editUser({ img: image }, id);
        const user = await getOne(id);

        setUserJson(user);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "É necessário utilizar foto menores ou igual a 10mb!",
        });
      }
    }
  };

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

  useEffect(() => {
    setImage(img);

    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <ContainerModal>
        <Header>
          <p>
            <strong>Informações do usuário</strong>
          </p>

          <p>
            <Loggout onClick={handleLogOff}>
              <AiOutlineLogin />
            </Loggout>
          </p>
        </Header>

        <InfoUser>
          <ImageContainer>
            <img
              style={{ filter: edit === true && "blur(2px)" }}
              src={image}
              alt={Photo}
            />

            <div>
              <label
                htmlFor="photo"
                style={{ display: edit ? "block" : "none" }}
              >
                Selecionar imagem
              </label>
              <input
                onChange={(event) => {
                  handleImage(event);
                }}
                id="photo"
                type="file"
              />
            </div>
          </ImageContainer>

          <div>
            <UserItem>
              <BiUser
                style={{
                  fontSize: "25px",
                }}
              />
              <p>{name}</p>
            </UserItem>

            <UserItem>
              <MdOutlineAlternateEmail
                style={{
                  fontSize: "25px",
                }}
              />
              <p>{email}</p>
            </UserItem>
          </div>
        </InfoUser>

        <Action>
          <button
            onClick={
              edit
                ? () => {
                    setImage(img);
                    setEdit(false);
                  }
                : () => {
                    setModalIsOpen(false);
                  }
            }
          >
            {edit ? "Cancelar" : "Fechar"}
          </button>
          <button onClick={handleOnSave}>{edit ? "Salvar" : "Editar"}</button>
        </Action>
      </ContainerModal>
    </Modal>
  );
};
