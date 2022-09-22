import { useState } from "react";

import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import { v4 as uuidv4 } from "uuid";

import { login, register } from "../../../../../utils/user";

import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async () => {
    const users = await login();

    const existingEmail = users.filter((element) => {
      return element.email === email;
    });

    if (email === "" && password === "" && name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos Estão  vazios!",
      });
    } else if (existingEmail[0]) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ja existe um registro com esse email!",
      });
    } else if (name && email && password) {
      const user = {
        name: name,
        email: email,
        password: password,
        id: uuidv4(),
      };

      register(user);

      Swal.fire("Sua conta foi criada com sucesso!", "Bom Trabalho", "success");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <FormItem
        set={setName}
        label="Nome de usuário"
        placeholder="Nome de usuário"
        id="username"
        type="text"
        value={name}
      />

      <FormItem
        set={setEmail}
        label="Seu email"
        placeholder="Email"
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
      <Button calback={handleRegister} value="Criar Conta" />
    </form>
  );
};

export default Form;
