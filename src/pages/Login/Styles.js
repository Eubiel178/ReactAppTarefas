import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 60%;
  height: 30em;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.096);

  @media (max-width: 866px) {
    width: 60%;
    border-radius: 2em;
  }

  @media (max-width: 580px) {
    width: 70%;
  }

  @media (max-width: 410px) {
    width: 90%;
  }
`;
