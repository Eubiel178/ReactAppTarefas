import { Form } from "./Styles";

export const FormContainer = ({ children, ...rest }) => {
  return <Form {...rest}>{children}</Form>;
};
