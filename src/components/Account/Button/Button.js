import { Container } from "./Styles";

import { Link } from "react-router-dom";

const Button = ({ value, to, event }) => {
  return (
    <Container>
      <button onClick={event}>
        <Link to={to}>{value}</Link>
      </button>
    </Container>
  );
};

export default Button;
