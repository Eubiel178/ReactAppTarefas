import { useContext } from "react";

import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

import Context from "../../../../../contexts/Contexts";

const Form = () => {
  const { auth, setAuth } = useContext(Context);

  const Authenticated = (event) => {
    event.preventDefault();

    setAuth(!auth);
  };

  return (
    <form>
      <FormItem label="Seu email" placeholder="Email" id="email" type="email" />

      <FormItem
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
      />
      <Button event={Authenticated} value="Logar" to="/" />
    </form>
  );
};

export default Form;
