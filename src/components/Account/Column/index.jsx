import { AsideContainer, SecondText, LinkContainer } from "./styles";
import { Link } from "react-router-dom";

const Column = ({ primaryText, secondText, register, text, to }) => {
  return (
    <AsideContainer>
      <aside>
        <p>
          <strong>
            {primaryText} <br />
            <SecondText>{secondText}</SecondText>
          </strong>
        </p>

        <LinkContainer>
          <p>
            {text}
            <Link to={to}>{register}</Link>
          </p>
        </LinkContainer>
      </aside>
    </AsideContainer>
  );
};

export default Column;
