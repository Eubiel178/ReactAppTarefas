import Contexts from "../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

//libs
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

//page utills
import { getLoggedUser, login } from "../../../utils/user";

//components
import InputRHF from "../../../components/InputRHF/Index";
import Button from "../../../components/Button/Index";
import ButtonLink from "../../../components/ButtonLink/Index";

import { FormContainer, ButtonContainer } from "./Styles";
import { schema } from "./ValidationForm";

const EditForm = () => {
  const [loading, setLoading] = useState(false);
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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou senha incorreto!",
        });
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const user = await getLoggedUser();

      if (user) {
        setAuth(true);
      }
    })();
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <InputRHF
        name="email"
        type="email"
        placeholder="Seu email"
        control={control}
        error={errors?.email && errors.email?.message}
      />

      <InputRHF
        name="password"
        type="password"
        placeholder="Sua senha"
        control={control}
        error={errors?.password && errors.password?.message}
      />

      <Button value="Logar" loading={loading} />

      <ButtonContainer>
        <ButtonLink
          to="/register"
          text=" Ainda não tem conta?"
          textLink="Cadastre-se"
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditForm;
