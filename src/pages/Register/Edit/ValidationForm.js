import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Por favor informe um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "O campo senha deve conter no minimo 6 digitos")
    .required("Campo obrigatório"),
  password_confirmation: yup
    .string()
    .min(6, "O campo senha deve conter no minimo 6 digitos")
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
});
