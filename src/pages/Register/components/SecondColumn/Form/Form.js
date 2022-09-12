import FormItem from "../../../../../components/Account/FormITem/FormItem";
import Button from "../../../../../components/Account/Button/Button";

function Form() {
  return (
    <form>
      <FormItem
        label="usuário"
        placeholder="Nome de usuário"
        id="username"
        type="text"
      />

      <FormItem label="Seu email" placeholder="Email" id="email" type="email" />

      <FormItem
        label="Sua senha"
        placeholder="Senha"
        id="password"
        type="password"
      />
      <Button value="Criar Conta" to="" />
    </form>
  );
}

export default Form;
