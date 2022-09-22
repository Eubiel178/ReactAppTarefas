import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import Contexts from "../../../../../contexts/Contexts";

import { login } from "../../../../../utils/user";

import { useState, useContext } from "react";

import Swal from "sweetalert2";

const Form = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setAuth } = useContext(Contexts);

  const handleLogin = async () => {
    let user = await login();

    if (email !== user.email && password !== user.password) {
      Swal.fire({
        icon: "error",
        text: "O email e a senha estão incorretos!",
      });
    } else if (email !== user.email) {
      Swal.fire({
        icon: "error",
        text: "O email esta incorreto!",
      });
    } else if (password !== user.email) {
      Swal.fire({
        icon: "error",
        text: "Senha incorreta!",
      });
    } else if (user.email === email && user.password === password) {
      Swal.fire({
        icon: "error",
        text: "O usuario ${user.name} foi logado com sucesso",
      });

      setAuth(true);
    }
  };

  return (
    <form>
      <FormItem
        label="Seu email"
        placeholder="Email"
        id="email"
        type="email"
        set={setEmail}
      />

      <FormItem
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
        set={setPassword}
      />
      <Button calback={handleLogin} value="Logar" />
    </form>
  );
};

export default Form;
