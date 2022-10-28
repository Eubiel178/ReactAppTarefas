import Contexts from "../../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";

//libs
import Swal from "sweetalert2";

//page utills
import { getLoggedUser, login } from "../../../../utils/user";

//components
import FormItem from "../../../../components/FormITem/Index";
import Button from "../../../../components/Button/Index";
import ButtonLink from "../../../../components/ButtonLink/Index";

import { FormContainer, ButtonContainer } from "./Styles";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuth } = useContext(Contexts);

  const session = async () => {
    const user = await getLoggedUser();

    if (user) {
      setAuth(true);
    }
  };

  useEffect(() => {
    session();
  }, []);

  const swalModal = (text) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
    });
  };

  const handleLogin = async () => {
    if (email === "" && password === "") {
      swalModal("Os campos estão vazios..!");
    } else if (email === "" || password === "") {
      swalModal("Verifique se todos os campos estao preenchidos..!");
    } else if (email.includes("@") === false) {
      swalModal("Por favor informe um email valido!");
    } else if (email && password && loading === false) {
      setLoading(true);
      const status = await login({
        email: email,
        password: password,
      });

      if (status === 200) {
        setLoading(false);
        setAuth(true);
      } else {
        swalModal("Email ou senha incorreto!");
      }
    }
  };

  return (
    <FormContainer>
      <FormItem
        placeholder="Seu email"
        id="email"
        type="email"
        set={setEmail}
      />

      <FormItem
        placeholder="Sua senha"
        id="password"
        type="password"
        set={setPassword}
      />
      <Button calback={handleLogin} value="Logar" loading={loading} />

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

export default Form;
