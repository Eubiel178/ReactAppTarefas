import { Link } from "react-router-dom";

import Header from "../../../../components/Account/Header/Header";
import Form from "./Form/Form";

import { SectionContent, Register } from "./Styles";

function PrimaryColumn() {
  return (
    <SectionContent>
      <section>
        <Header title="Login" />
        <Form />
        <Register>
          Ainda não tem conta?
          <button>
            <Link to="/register">Cadastre-se</Link>
          </button>
        </Register>
      </section>
    </SectionContent>
  );
}

export default PrimaryColumn;
