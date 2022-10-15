//hooks
import { useState } from "react";

//libs
import Swal from "sweetalert2";

//page utills
import { register } from "../../../../../utils/user";

//components
import FormItem from "../../../../../components/Account/FormITem/index";
import Button from "../../../../../components/Account/Button/index";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = async () => {
    if (email === "" && password === "" && name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos estão  vazios!",
      });
    }
    if (password === "" || email === "" || password2 === "" || name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique se todos os campos estao preenchidos..!",
      });
    } else if (name && email && password && password === password2) {
      const response = await register({
        user: {
          name: name,
          user: email,
          email: email,
          password: password,
          password_confirmation: password2,
        },
      });

      if (response.code === "ERR_BAD_REQUEST") {
        await Swal.fire("Oops", "Ja existe uma conta com esse email!", "error");

        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
      } else {
        await Swal.fire(
          "Sua conta foi criada com sucesso!",
          "Bom Trabalho",
          "success"
        );
      }
    }
  };

  return (
    <form>
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

      <Button calback={handleRegister} value="Criar Conta" />
    </form>
  );
};

export default Form;
