import { Container } from "./Styles";

import Header from "../../../../components/Account/Header/Header";
import Form from "./Form/Form";

const SecondColumn = () => {
  return (
    <Container>
      <Header title="Cadastre-se" />
      <Form />
    </Container>
  );
};

export default SecondColumn;
