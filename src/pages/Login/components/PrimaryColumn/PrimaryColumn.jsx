import Header from "../../../../components/Account/Header/Header";
import Form from "./Form/Form";

import { SectionContent } from "./Styles";

const PrimaryColumn = () => {
  return (
    <SectionContent>
      <section>
        <Header title="Login" />
        <Form />
      </section>
    </SectionContent>
  );
};

export default PrimaryColumn;
