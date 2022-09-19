import { Link } from "react-router-dom";

import { Container } from "./Styles";

const NavBar = () => {
  return (
    <Container>
      <nav>
        <li>
          <Link to="/">Login</Link>
        </li>
      </nav>
    </Container>
  );
};

export default NavBar;
