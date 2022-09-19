import { HeaderContents } from "./Styles";

import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <HeaderContents>
        <NavBar />
        <h1>ADICIONAR TAREFAS</h1>
      </HeaderContents>
    </header>
  );
};

export default Header;
