import { useState } from "react";

import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import { v4 as uuidv4 } from "uuid";

import { registerUser } from "../../../../../utils/user";

import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Register = () => {
    let user = {};

    if (name && email && password) {
      user = {
        name: name,
        email: email,
        password: password,
        id: uuidv4(),
      };
      const userRegister = registerUser(user);

      if (userRegister === true) {
        Swal.fire("Sua conta foi criada com sucesso");
      }
    }
  };

  return (
    <form>
      <FormItem
        set={setName}
        label="Nome de usuário"
        placeholder="Nome de usuário"
        id="username"
        type="text"
      />

      <FormItem
        set={setEmail}
        label="Seu email"
        placeholder="Email"
        id="email"
        type="email"
      />

      <FormItem
        set={setPassword}
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
      />
      <Button calback={Register} value="Criar Conta" />
    </form>
  );
};

export default Form;
