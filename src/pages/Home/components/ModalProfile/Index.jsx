import { useContext, useState, useEffect } from "react";

import Modal from "react-modal";

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

import profile from "../../../../images/profile.jpg";
import Contexts from "../../../../contexts/Contexts";
import { editUser, getOne, logOff } from "../../../../utils/user";
import Swal from "sweetalert2";

const ModalProfile = ({
  modalIsOpen,
  setModalIsOpen,
  name,
  email,
  img,
  id,
}) => {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState("");
  const { mode, setAuth, setUserJson } = useContext(Contexts);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "30em",
      width: "20em",
      backgroundColor: "#ffffff",
      border: "1px solid rgb(0 0 0 / 44%)",
      boxShadow: "6px 6px 8px #00000030",
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
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Deu ruim entre em contato com o administrador!",
          html: "<p>entre em contato/<p> <p>dev123gabriel@gmail.com</p>",
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
      preConfirm: (value) => {
        logOff();
        Swal.fire("Usuario deslogado com sucesso!", "", "success");
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
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <ContainerModal>
        <Header borderBottom={mode ? "#B64FC8" : "#3085d6"}>
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
          <ImageContainer color={mode ? "#B64FC8" : "#3085d6"}>
            <img
              style={{ filter: edit === true && "blur(2px)" }}
              src={image ? image : profile}
              alt=""
            />

            <div>
              <label
                htmlFor="photo"
                style={{ display: edit ? "block" : "none" }}
                color={mode ? "#B64FC8" : "#3085d6"}
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
                  fill: mode ? "#B64FC8" : "#3085d6",
                }}
              />
              <p>{name}</p>
            </UserItem>

            <UserItem>
              <MdOutlineAlternateEmail
                style={{
                  fontSize: "25px",
                  fill: mode ? "#B64FC8" : "#3085d6",
                }}
              />
              <p>{email}</p>
            </UserItem>
          </div>
        </InfoUser>

        <Action background={mode ? "#B64FC8" : "#3085d6"}>
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

export default ModalProfile;
