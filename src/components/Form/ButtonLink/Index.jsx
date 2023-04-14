import { Link } from "react-router-dom";

import { Text, Button } from "./Styles";

export const ButtonLink = ({ to, text, textLink }) => {
  return (
    <Text>
      {text}
      <Link to={to}>
        <Button type="button">{textLink}</Button>
      </Link>
    </Text>
  );
};
