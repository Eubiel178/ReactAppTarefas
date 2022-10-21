import Contexts from "../../../../../contexts/Contexts";

//hooks
import { useState, useContext, useEffect } from "react";

//libs
import Swal from "sweetalert2";

//page utills
import { getLoggedUser, login } from "../../../../../utils/user";

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
    } else if (email && password) {
      const response = await login(
        {
          user: email,
          password: password,
        },
        setAuth
      );

      if (response === false) {
        swalModal("Senha incorreta!");
      }
    }
  };

  return (
    <form>
      <FormItem
        label="Seu email"
        placeholder="example@gmail.com"
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
