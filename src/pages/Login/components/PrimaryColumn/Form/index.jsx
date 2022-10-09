import Contexts from "../../../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";

//libs
import Swal from "sweetalert2";

//page utills
import {
  getLoggedUser,
  login,
  getToken,
  loggedInUser,
} from "../../../../../utils/user";

//components
import FormItem from "../../../../../components/Account/FormITem/index";
import Button from "../../../../../components/Account/Button/index";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const response = await login(
        {
          user: email,
          password: password,
        },
        setAuth
      );
      console.log(response);

      if (response === false) {
        Swal.fire({
          icon: "error",
          text: "Senha incorreta!",
        });
      }
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
