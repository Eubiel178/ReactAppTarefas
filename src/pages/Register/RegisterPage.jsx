import { Link } from "react-router-dom";

import { ContainerContent, Register } from "./Styles";

import Body from "../../components/Account/Body/Body";
import PrimaryColumn from "./components/PrimaryColumn/PrimaryColumn";
import SecondColumn from "./components/SecondColumn/SecondColum";

const RegisterPage = () => {
  return (
    <section>
      <Body>
        <ContainerContent>
          <PrimaryColumn />
          <SecondColumn />

          <Register>
            Já tem uma conta
            <button>
              <Link to="/">Login</Link>
            </button>
          </Register>
        </ContainerContent>
      </Body>
    </section>
  );
};

export default RegisterPage;
