import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import Contexts from "../../../../../contexts/Contexts";

import {
  getLoggedUser,
  login,
  loggedInUser,
  getToken,
} from "../../../../../utils/user";

import { useState, useContext, useEffect } from "react";

import Swal from "sweetalert2";

const Form = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(Contexts);

  const handleLogin = async () => {
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
        text: "Por favor informe um email valido!",
      });
    } else if (email && password) {
      const response = await login({
        user: email,
        password: password,
      });

      const token = await getToken();

      if (response.code === "ERR_BAD_REQUEST") {
        alert();
        Swal.fire({
          icon: "error",
          text: "Senha incorreta!",
        });
      } else {
        setAuth(true);
      }
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
