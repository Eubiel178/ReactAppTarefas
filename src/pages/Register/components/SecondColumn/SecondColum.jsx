import { SectionContent } from "./Styles";

import Header from "../../../../components/Account/Header/Header";
import Form from "./Form/Form";

const SecondColumn = () => {
  return (
    <SectionContent>
      <section>
        <Header title="Cadastre-se" />
        <Form />
      </section>
    </SectionContent>
  );
};

export default SecondColumn;
