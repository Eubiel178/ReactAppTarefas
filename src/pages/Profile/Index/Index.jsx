import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import ReactLoading from "react-loading";

import {
  MdOutlinePassword,
  MdOutlineAlternateEmail,
  MdOutlineEdit,
} from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { CgTrash } from "react-icons/cg";

import Photo from "../../../images/profile.jpg";
import Contexts from "../../../contexts/Contexts";
import { editUser, login } from "../../../utils/backend/user";

import { useForm } from "react-hook-form";
import { schema } from "./ValidationForm";
import { yupResolver } from "@hookform/resolvers/yup";

import Edit from "../components/Edit/Index";
import EditPassword from "../components/EditPassword/Index";

import {
  MainContainer,
  ImageContainer,
  InfoUser,
  InformationContainer,
  Action,
  Content,
  BlockedContent,
  FormContainer,
  InputItem,
} from "./Styles";
import {
  ContainerPages,
  LoadingPage,
  NavBar,
  Title,
  EditUserItem,
  IsActiveEditOff,
  IsEditOff,
} from "../../../components/Index";
import Swal from "sweetalert2";

const Profile = () => {
  const [renderPage, setRenderPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [access, setAcess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [image, setImage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [error, setError] = useState("");

  const { userJson, setUserJson } = useContext(Contexts);
  const { name, _id, img, email } = userJson;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

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

  const handleOnCancelEdit = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      navigate("/home");
    }
  };

  const handleAccessUnlock = async (event) => {
    event.preventDefault();

    if (loading === false) {
      setLoading(true);

      try {
        if (currentPassword.length < 6) {
          setError("A senha nao pode ser menor que 6 digitos");
        } else {
          await login({ _id: userJson._id, password: currentPassword });
          setAcess(true);
          setLoading(false);

          Swal.fire("Good job!", "Acesso liberado!", "success");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado!",
        });

        setLoading(false);
      }
    }
  };

  const handleOnSubmit = async (data) => {
    if (loading === false) {
      setLoading(true);
      let userData = data;

      if (data.password && data.password_confirm) {
        userData = { ...data, img: img, _id: _id };
      } else {
        userData = {
          name: data.name,
          email: data.email,
          img: image,
          _id: _id,
        };
      }

      try {
        await editUser(userData, _id);

        setUserJson(userData);

        Swal.fire("Good job!", "Editado com sucesso!", "success");
        setIsEdit(false);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado com a imagem escolhida!",
        });
      }

      setLoading(false);
    }
  };

  setTimeout(() => {
    setRenderPage(false);
  }, 2000);

  useEffect(() => {
    if (img) {
      setImage(img);
    }
  }, []);
  return (
    <>
      {renderPage ? (
        <LoadingPage />
      ) : (
        <ContainerPages>
          <NavBar />
          {access ? (
            <MainContainer>
              <Title text="Informações do usuário" />

              <InfoUser>
                <div>
                  <ImageContainer>
                    <img
                      style={{ filter: isEdit === true && "blur(2px)" }}
                      src={image ? image : Photo}
                      alt={""}
                    />

                    <button onClick={() => setImage("")}>
                      <CgTrash />
                    </button>

                    <div>
                      <label
                        htmlFor="photo"
                        style={{ display: isEdit ? "block" : "none" }}
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

                  <Content>
                    <Edit
                      id={_id}
                      isEditState={isEdit}
                      name="name"
                      control={control}
                      error={""}
                      text={name}
                      icon={<BiUser />}
                      type="text"
                      placeholder="Nome"
                      reset={reset}
                    />

                    <Edit
                      id={_id}
                      isEditState={isEdit}
                      name="email"
                      control={control}
                      error={errors.email && errors.email?.message}
                      text={email}
                      icon={<MdOutlineAlternateEmail />}
                      type="email"
                      placeholder="Email"
                      reset={reset}
                    />

                    <EditPassword
                      id={_id}
                      isEditState={isEdit}
                      name="password"
                      control={control}
                      error={errors.password && errors.password?.message}
                      text="......"
                      type="passoword"
                      placeholder="Senha"
                      icon={<AiOutlineLock />}
                      isEditItem={isEditPassword}
                      setIsEditItem={setIsEditPassword}
                      reset={reset}
                    />

                    {isEditPassword === true && (
                      <EditPassword
                        id={_id}
                        isEditState={isEdit}
                        name="password_confirm"
                        control={control}
                        error={
                          errors.password_confirm &&
                          errors.password_confirm?.message
                        }
                        text="......"
                        type="passoword"
                        icon={<GiConfirmed />}
                        placeholder="Confirmacao de senha"
                        isEditItem={isEditPassword}
                        setIsEditItem={setIsEditPassword}
                        reset={reset}
                      />
                    )}

                    {isEdit ? (
                      <Action>
                        <button type="button" onClick={() => setIsEdit(false)}>
                          Cancelar
                        </button>

                        <button
                          onClick={handleSubmit(handleOnSubmit)}
                          type="button"
                        >
                          {loading ? (
                            <ReactLoading
                              type="spin"
                              color="#ffffff"
                              height="1em"
                              width="1em"
                            />
                          ) : (
                            <div>Salvar</div>
                          )}
                        </button>
                      </Action>
                    ) : (
                      <Action>
                        <button type="button" onClick={() => navigate("/home")}>
                          Voltar
                        </button>

                        <button type="button" onClick={() => setIsEdit(true)}>
                          Editar
                        </button>
                      </Action>
                    )}
                  </Content>
                </div>
              </InfoUser>
            </MainContainer>
          ) : (
            <BlockedContent>
              <Title text="🔒 Acesso bloqueado" />

              <div>
                <p>
                  Informe sua senha atual para ter
                  <strong>acesso liberado</strong> as informações do usuário
                </p>
              </div>

              <FormContainer>
                <form onSubmit={handleAccessUnlock}>
                  <ImageContainer>
                    <img
                      style={{ filter: isEdit === true && "blur(2px)" }}
                      src={image ? image : Photo}
                      alt={""}
                    />
                  </ImageContainer>

                  <InputItem>
                    <label>Informe sua senha atual</label>

                    <input
                      type="password"
                      placeholder="Senha..."
                      autoCapitalize="off"
                      onChange={(event) => {
                        setCurrentPassword(event.target.value);

                        event.target.value.length >= 6 && setError("");
                      }}
                      value={currentPassword}
                      required="true"
                    />

                    <p>{error}</p>

                    <button>
                      {loading ? (
                        <ReactLoading
                          type="spin"
                          color="#ffffff"
                          height="1em"
                          width="1em"
                        />
                      ) : (
                        <div>Confirmar</div>
                      )}
                    </button>
                  </InputItem>
                </form>
              </FormContainer>
            </BlockedContent>
          )}
        </ContainerPages>
      )}
    </>
  );
};

export default Profile;
