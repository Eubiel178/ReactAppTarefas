import Swal from "sweetalert2";
import { getOne } from "./user";

export const isLogged = async (setUser, setAuth, navigate) => {
  try {
    const user = await getOne(localStorage.getItem("token"));

    setUser(user);
  } catch (error) {
    Swal.fire({
      title: "Por favor fazer login para ter acesso a todas as paginas do app!",
      icon: "info",

      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    setAuth(false);
    navigate("/");
  }
};
