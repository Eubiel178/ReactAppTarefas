import { HeaderContents } from "./styles";

const Header = ({ title }) => {
  return (
    <header>
      <HeaderContents>
        <h1>{title}</h1>
      </HeaderContents>
    </header>
  );
};

export default Header;
