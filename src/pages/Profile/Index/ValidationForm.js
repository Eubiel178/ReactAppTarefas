import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Por favor informe um email válido"),
  password: yup
    .string()
    .min(6, "O campo senha deve conter no minimo 6 digitos"),
  password_confirm: yup
    .string()
    .min(6, "O campo senha deve conter no minimo 6 digitos")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
});
