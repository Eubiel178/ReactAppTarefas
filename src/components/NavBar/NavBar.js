import { Link } from "react-router-dom";

import { NavBarContent, NavItens } from "./Styles";

function NavBar() {
  return (
    <nav>
      <NavBarContent>
        <NavItens>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </NavItens>
      </NavBarContent>
    </nav>
  );
}

export default NavBar;
