import { Container, Form } from "./Styles";

export const FormContainer = ({ children, ...rest }) => {
  return (
    <Container>
      <Form {...rest}>{children}</Form>
    </Container>
  );
};
