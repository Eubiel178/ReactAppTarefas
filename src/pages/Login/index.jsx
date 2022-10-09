//styled-components
import { ContainerContent, Register } from "./styles";

//libs
import { Link } from "react-router-dom";

//components
import Body from "../../components/Account/Body/index";
import PrimaryColumn from "./components/PrimaryColumn/index";
import SecondColumn from "./components/SecondColumn/index";

const Login = () => {
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

export default Login;
