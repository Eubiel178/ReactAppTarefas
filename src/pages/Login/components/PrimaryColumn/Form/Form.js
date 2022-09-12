import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

function Form() {
  return (
    <form>
      <FormItem label="Seu email" placeholder="Email" id="email" type="email" />

      <FormItem
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
      />
      <Button value="Logar" to="/Login" />
    </form>
  );
}

export default Form;
