import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import Contexts from "../../../../../contexts/Contexts";

import { getLoggedUser, login, loggedInUser } from "../../../../../utils/user";

import { useState, useContext, useEffect } from "react";

import Swal from "sweetalert2";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(Contexts);

  const handleLogin = async () => {
    const users = await login();

    const user = users.filter((element) => {
      return element.email === email && element.password === password;
    });

    if (email === "" && password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos estão vazios..!",
      });
    } else if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique se todos os campos estao preenchidos..!",
      });
    } else if (email.includes("@") === false) {
      Swal.fire({
        icon: "error",
        text: "Por favor iinforme um email valido!",
      });
    } else if (email !== user[0].email) {
      Swal.fire({
        icon: "error",
        text: "O usuario nao existe!",
      });
    } else if (password !== user[0].password && email === user[0].email) {
      Swal.fire({
        icon: "error",
        text: "A senha esta incorreta!",
      });
    } else if (email !== user[0].email) {
      Swal.fire({
        icon: "error",
        text: "O email esta incorreto!",
      });
    } else if (password !== user[0].password) {
      Swal.fire({
        icon: "error",
        text: "Senha incorreta!",
      });
    } else if (user[0].email === email && user[0].password === password) {
      loggedInUser(user);

      const logged = await getLoggedUser();

      Swal.fire(
        `O usuario ${logged[0].name}  foi logado com sucesso!`,
        "Parabéns",
        "success"
      );

      setAuth(true);
    }
  };

  useEffect(() => {
    const user = getLoggedUser();

    if (user) {
      setAuth(true);
    }
  }, []);
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
