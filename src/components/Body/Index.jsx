import { Container, ContainerContent } from "./styles";

const Body = ({ children }) => {
  return (
    <Container>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};

export default Body;
