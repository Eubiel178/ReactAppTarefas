import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor informe um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min("O campo senha deve conter no minimo 6 digitos")
    .required("Campo obrigatório"),
});
