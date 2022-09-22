import { useContext } from "react";
import Contexts from "../../../../contexts/Contexts";
import { loggout } from "../../../../utils/user";
import { HeaderContents } from "./Styles";

const Header = () => {
  const { setAuth } = useContext(Contexts);

  const handleLogin = () => {
    loggout();
    setAuth(false);
  };

  return (
    <header>
      <HeaderContents>
        <div>
          <button onClick={handleLogin}>Deslogar</button>
        </div>
        <h1>ADICIONAR TAREFAS</h1>
      </HeaderContents>
    </header>
  );
};

export default Header;
