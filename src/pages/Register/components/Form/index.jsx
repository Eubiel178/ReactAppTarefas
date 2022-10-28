//hooks
import { useState } from "react";

//libs
import Swal from "sweetalert2";

//page utills
import { register } from "../../../../utils/user";

//components
import FormItem from "../../../../components/FormITem/Index";
import Button from "../../../../components/Button/Index";
import ButtonLink from "../../../../components/ButtonLink/Index";

import { FormContainer, ButtonContainer } from "./Styles";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleRegister = async () => {
    if (email === "" && password === "" && name === "") {
      swalModal("Os campos estão  vazios!");
    }
    if (password === "" || email === "" || password2 === "" || name === "") {
      swalModal("Verifique se todos os campos estao preenchidos..!");
    } else if (
      name &&
      email &&
      password &&
      password === password2 &&
      password.length >= 6 &&
      loading === false
    ) {
      setLoading(true);
      const status = await register({
        name: name,
        email: email,
        password: password,
        password_confirmation: password2,
      });

      if (status === 201 || status === 200) {
        setLoading(false);
        await swalModal();
        navigate("/");
      } else {
        await swalModal("Ja existe uma conta com esse email!");
        //setEmail("");
      }
    } else if (password.length <= 6) {
      swalModal("A senha deve conter no minimo 6 digitos");
    }
  };

  return (
    <FormContainer>
      <FormItem
        set={setName}
        label="Nome"
        placeholder="Nome"
        id="name"
        type="name"
        value={name}
      />

      <FormItem
        set={setEmail}
        label="Seu email"
        placeholder="example@gmail.com"
        id="email"
        type="email"
        value={email}
      />

      <FormItem
        set={setPassword}
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
        value={password}
      />

      <FormItem
        set={setPassword2}
        label="Repita sua senha"
        placeholder="Repita sua senha"
        id="password2"
        type="password"
        value={password2}
      />

      <Button calback={handleRegister} value="Criar Conta" loading={loading} />

      <ButtonContainer>
        <ButtonLink to="/" text="Já tem uma conta" textLink="Login" />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
