import { Link } from "react-router-dom";
import { Container } from "./Styles";

const Button = ({ calback, value, to }) => {
  const Event = (event) => {
    event.preventDefault();

    calback();
  };
  return (
    <Container>
      <button onClick={Event}>{value}</button>
    </Container>
  );
};

export default Button;
