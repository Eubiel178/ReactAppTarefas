import Contexts from "../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

//libs
import { yupResolver } from "@hookform/resolvers/yup";

//page utills
import { getLoggedUser, login } from "../../../utils/user";

//components
import InputRHF from "../../../components/InputRHF/Index";
import Button from "../../../components/Button/Index";
import ButtonLink from "../../../components/ButtonLink/Index";

import { Error } from "../../../components/InputRHF/Styles";
import { FormContainer } from "./Styles";
import { schema } from "./ValidationForm";
import Visibility from "../../../components/Visibility/Index";

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [status, setStatus] = useState("");
  const { setAuth } = useContext(Contexts);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (data) => {
    if (loading === false) {
      setLoading(true);
      const status = await login(data);

      if (status === 200) {
        setAuth(true);
      } else {
        setLoading(false);

        setStatus("Email ou senha incorreto!");

        setTimeout(() => {
          setStatus("");
        }, 1000 * 3);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const user = await getLoggedUser();

      if (user) {
        setAuth(true);
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

        <InputRHF
          name="password"
          type={passwordVisible ? "text" : "password"}
          placeholder="Sua senha"
          control={control}
          error={errors?.password && errors.password?.message}
        />

        {status && <Error>{status}</Error>}

        <Visibility value={passwordVisible} set={setPasswordVisible} />

        <Button value="Logar" loading={loading} />
      </div>

      <ButtonLink
        to="/register"
        text=" Ainda não tem conta?"
        textLink="Cadastre-se"
      />
    </FormContainer>
  );
};

export default EditForm;
