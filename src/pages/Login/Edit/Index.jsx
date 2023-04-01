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

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const { setAuth, setUserJson } = useContext(Contexts);

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
        const user = await getOne(localStorage.getItem("id"));

        if (status === 200 && user.name) {
          setUserJson(user);
          setAuth(true);
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
    (async () => {
      const id = localStorage.getItem("id");

      if (id) {
        const user = await getOne(id);

        if (user.name) {
          setUserJson(user);
          setAuth(true);
        }
      }
    })();

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
