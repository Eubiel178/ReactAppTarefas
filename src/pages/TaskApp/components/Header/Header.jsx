import { useContext } from "react";
import Swal from "sweetalert2";
import Contexts from "../../../../contexts/Contexts";
import { loggout } from "../../../../utils/user";
import { HeaderContents } from "./Styles";

const Header = () => {
  const { setAuth } = useContext(Contexts);

  const handleLogin = () => {
    Swal.fire({
      title: "Deseja deslogar?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Não",
      preConfirm: (value) => {
        if (value === true) {
          loggout();
          setAuth(false);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Usuario deslogado com sucesso");
      }
    });
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
