//styled-components
import { Container } from "./styles.";

//components
import Header from "../../../../components/Account/Header/index";
import Form from "./Form/index";

const SecondColumn = () => {
  return (
    <Container>
      <Header title="Cadastre-se" />
      <Form />
    </Container>
  );
};

export default SecondColumn;
