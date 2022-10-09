//styled-components
import { SectionContent } from "./styles";

//components
import Header from "../../../../components/Account/Header/index";
import Form from "./Form/index";

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
