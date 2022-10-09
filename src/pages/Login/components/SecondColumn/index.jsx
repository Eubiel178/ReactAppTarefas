//components
import Column from "../../../../components/Account/Column/index";

const SecondColumn = () => {
  return (
    <Column
      button="Cadastre-se"
      primaryText=" Bem vindo"
      secondText="ao nosso site"
      text="Ainda não tem conta "
      register="Cadastre-se"
      to="/register"
    />
  );
};

export default SecondColumn;
