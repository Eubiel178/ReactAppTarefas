import { useState } from "react";

import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

const Form = () => {
  const [token, setToken] = useState(false);

  const Token = (event) => {
    event.preventDefault();

    setToken(true);
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
      <Button event={Token} value="Logar" to="/Login" />
    </form>
  );
};

export default Form;
