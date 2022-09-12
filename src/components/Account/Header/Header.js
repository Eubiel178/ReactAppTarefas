import { HeaderContents } from "./Styles";

function Header({ title }) {
  return (
    <header>
      <HeaderContents>
        <h1>{title}</h1>
      </HeaderContents>
    </header>
  );
}

export default Header;
