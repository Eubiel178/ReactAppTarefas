//styled-components
import { ContainerContent, Login } from "./styles";

//libs
import { Link } from "react-router-dom";

//components
import Body from "../../components/Account/Body/index";
import PrimaryColumn from "./components/PrimaryColumn/index";
import SecondColumn from "./components/SecondColumn/index";

const Register = () => {
  return (
    <section>
      <Body>
        <ContainerContent>
          <PrimaryColumn />
          <SecondColumn />

          <Login>
            Já tem uma conta
            <button>
              <Link to="/">Login</Link>
            </button>
          </Login>
        </ContainerContent>
      </Body>
    </section>
  );
};

export default Register;
