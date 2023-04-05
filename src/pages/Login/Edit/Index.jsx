import Contexts from "../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

//libs
import { yupResolver } from "@hookform/resolvers/yup";

//page utills
import { getOne, login } from "../../../utils/user";

//components
import {
  FormContainer,
  InputPassword,
  InputRHF,
  Button,
  ButtonLink,
} from "../../../components/Index";

//styles
import { Error } from "../../../components/Form/InputRHF/Styles";
import { schema } from "./ValidationForm";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const { setAuth, setUserJson } = useContext(Contexts);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (fields) => {
    if (loading === false) {
      setLoading(true);

      try {
        const status = await login(fields);
        const user = await getOne(localStorage.getItem("token"));

        if (status === 200 && user.name) {
          setUserJson(user);
          setAuth(true);
          navigate("/home");
        }
      } catch (error) {
        setStatus("Email ou senha incorreto!");

        setTimeout(() => {
          setStatus("");
        }, 1000 * 3);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      (async () => {
        const user = await getOne(token);

        if (user.name) {
          setUserJson(user);
          navigate("/home");
          setAuth(true);
        }
      })();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <div>
        <InputRHF
          name="email"
          type="email"
          placeholder="Seu email"
          control={control}
          error={errors?.email && errors.email?.message}
        />
        <InputPassword
          name="password"
          placeholder="Sua senha"
          control={control}
          error={errors?.password && errors.password?.message}
        />
        {status && <Error>{status}</Error>}
        <Button value="Logar" loading={loading} />
      </div>

      <div>
        <ButtonLink
          to="/register"
          text=" Ainda não tem conta?"
          textLink="Cadastre-se"
        />
      </div>
    </FormContainer>
  );
};

export default EditForm;
