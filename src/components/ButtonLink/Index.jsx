import { Link } from "react-router-dom";

import {  Button } from "./Styles";

const ButtonLink = ({ to, text, textLink }) => {
  return (
          <p>
        {text}
        <Link to={to}>
          <Button>{textLink}</Button>
        </Link>
      </p>

  );
};

export default ButtonLink;
