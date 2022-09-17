import { Container } from "./Styles";

import { Link } from "react-router-dom";

const Button = ({ value, to }) => {
  return (
    <Container>
      <button>
        <Link to={to}>{value}</Link>
      </button>
    </Container>
  );
};

export default Button;
