import { ButtonItem } from "./Styles";

import ReactLoading from "react-loading";

const Button = ({ value, loading }) => {
  return (
    <div>
      {loading ? (
        <ButtonItem type="submit">
          <ReactLoading type="spin" color="#ffffff" height="1em" width="1em" />
        </ButtonItem>
      ) : (
        <ButtonItem type="submit">
          <div>{value}</div>
        </ButtonItem>
      )}
    </div>
  );
};

export default Button;
