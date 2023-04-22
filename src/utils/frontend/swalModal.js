import Swal from "sweetalert2";

export const swalModal = (title) => {
  if (title) {
    return Swal.fire({
      title: title,
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      showCloseButton: true,

      preConfirm: (value) => {
        return value;
      },
    });
  } else {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Tarefas concluidas não podem ser editada!",
    });
  }
};
