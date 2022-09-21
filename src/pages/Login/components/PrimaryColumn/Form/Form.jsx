import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import Contexts from "../../../../../contexts/Contexts";

import { login } from "../../../../../utils/user";

import { useState, useContext } from "react";

import Swal from "sweetalert2";

const Form = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { auth, setAuth } = useContext(Contexts);

  const Login = async () => {
    let data = await login();

    if (data.email === email && data.password == password) {
      Swal.fire(`Usuario ${data.name} logado com sucesso`);

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
      <Button calback={Login} value="Logar" />
    </form>
  );
};

export default Form;
