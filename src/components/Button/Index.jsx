import { ButtonItem } from "./styles";

import ReactLoading from "react-loading";

const Button = ({ calback, value, loading }) => {
  const Event = (event) => {
    event.preventDefault();

    calback();
  };
  return (
    <div>
      {loading ? (
        <ButtonItem onClick={Event} type="submit">
          <ReactLoading type="spin" color="#ffffff" height="0%" width="3%" />
        </ButtonItem>
      ) : (
        <ButtonItem onClick={Event} type="submit">
          {value}
        </ButtonItem>
      )}
    </div>
  );
};

export default Button;
