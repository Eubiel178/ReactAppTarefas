import { ContainerContent, Register } from "./Styles";

import { Link } from "react-router-dom";

import Body from "../../components/Account/Body/Body";
import PrimaryColumn from "./components/PrimaryColumn/PrimaryColumn";
import SecondColumn from "./components/SecondColumn/SecondColumn";

const LoginPage = () => {
  return (
    <section>
      <Body>
        <ContainerContent>
          <PrimaryColumn />
          <SecondColumn />
          <Register>
            Ainda não tem conta?
            <button>
              <Link to="/register">Cadastre-se</Link>
            </button>
          </Register>
        </ContainerContent>
      </Body>
    </section>
  );
};

export default LoginPage;
