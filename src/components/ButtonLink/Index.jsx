import { Link } from "react-router-dom";

import { Container, Button } from "./Styles";

const ButtonLink = ({ to, text, textLink }) => {
  return (
    <Container>

      <p>
        {text}
        <Button>
          <Link to={to}>{textLink}</Link>
        </Button>
      </p>
    </Container>
  );
};

export default ButtonLink;
