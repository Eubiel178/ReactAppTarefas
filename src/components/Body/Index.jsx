import { Container, ContainerContent } from "./Styles";

const Body = ({ children }) => {
  return (
    <Container>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};

export default Body;
