import { Container, ContainerContent } from "./Styles";

export const Body = ({ children }) => {
  return (
    <Container>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};
