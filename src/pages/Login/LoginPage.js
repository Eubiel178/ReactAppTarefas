import { ContainerContent } from "./Styles";

import Body from "../../components/Account/Body/Body";
import PrimaryColumn from "./components/PrimaryColumn/PrimaryColumn";
import SecondColumn from "./components/SecondColumn/SecondColumn";
import NavBar from "../../components/NavBar/NavBar";

const LoginPage = () => {
  return (
    <section>
      <Body>
        <ContainerContent>
          <PrimaryColumn />
          <SecondColumn />
        </ContainerContent>
      </Body>
    </section>
  );
};

export default LoginPage;
