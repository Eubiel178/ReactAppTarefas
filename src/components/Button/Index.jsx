import { ButtonItem } from "./styles";

import ReactLoading from "react-loading";

const Button = ({ calback, value, loading }) => {
  const Event = (event) => {
    event.preventDefault();

    calback();
  };
  return (
    <>
      {loading ? (
        <ButtonItem onClick={Event}>
          <ReactLoading type="spin" color="#ffffff" height="0%" width="3%" />
        </ButtonItem>
      ) : (
        <ButtonItem onClick={Event}> {value}</ButtonItem>
      )}
    </>
  );
};

export default Button;
