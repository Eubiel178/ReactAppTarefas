//hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

//libs
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";

//page utills
import { register } from "../../../utils/user";

//components
import InputRHF from "../../../components/InputRHF/Index";
import Button from "../../../components/Button/Index";
import ButtonLink from "../../../components/ButtonLink/Index";

import { FormContainer, ButtonContainer } from "./Styles";
import { useNavigate } from "react-router-dom";
import { schema } from "./ValidationForm";

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const swalModal = (text) => {
    if (text) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: text,
      });
    } else {
      Swal.fire("Sua conta foi criada com sucesso!", "Bom Trabalho", "success");
    }
  };

  const handleRegister = async (data) => {
    if (loading === false) {
      setLoading(true);

      const status = await register(data);

      if (status === 201 || status === 200) {
        await swalModal();
        navigate("/");
      } else {
        reset({ ...data, email: "" });
        await swalModal("Ja existe uma conta com esse email!");

        setLoading(false);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleRegister)}>
      <InputRHF
        name="name"
        type="text"
        placeholder="Nome"
        control={control}
        error={errors?.name && errors.name?.message}
      />

      <InputRHF
        name="email"
        type="email"
        placeholder="example@gmail.com"
        control={control}
        error={errors?.email && errors.email?.message}
      />

      <InputRHF
        name="password"
        type="password"
        placeholder="Senha"
        control={control}
        error={errors?.password && errors.password?.message}
      />

      <InputRHF
        name="password_confirmation"
        type="password"
        placeholder="Repita sua senha"
        control={control}
        error={
          errors?.password_confirmation && errors.password_confirmation?.message
        }
      />

      <Button value="Criar Conta" loading={loading} />

      <ButtonContainer>
        <ButtonLink to="/" text="Já tem uma conta" textLink="Login" />
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditForm;
