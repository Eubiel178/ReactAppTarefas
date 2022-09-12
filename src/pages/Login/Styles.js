import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 60%;
  height: 30em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 866px) {
    width: 50%;
  }

  @media (max-width: 580px) {
    width: 70%;
  }

  @media (max-width: 410px) {
    width: 90%;
  }
`;
