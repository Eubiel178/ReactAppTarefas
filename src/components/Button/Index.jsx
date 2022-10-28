import { ButtonItem } from "./styles";

const Button = ({ calback, value }) => {
  const Event = (event) => {
    event.preventDefault();

    calback();
  };
  return <ButtonItem onClick={Event}>{value}</ButtonItem>;
};

export default Button;
