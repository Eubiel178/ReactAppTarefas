import Column from "../../../../components/Account/Column/Column";

const PrimaryColumn = () => {
  return (
    <Column
      primaryText=" Preencha todos os campos"
      secondText="para criar sua conta"
      text="Já tem uma conta?"
      register="Login"
      to="/login"
    />
  );
};

export default PrimaryColumn;
