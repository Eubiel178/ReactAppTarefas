//libs
import { Link } from "react-router-dom";

//components
import Header from "../../components/Header/Index";
import Body from "../../components/Body/Index";
import Form from "./components/Form";

const Register = () => {
  return (
    <section>
      <Body>
        <Header title="Cadastre-se" />
        <Form />
      </Body>
    </section>
  );
};

export default Register;
