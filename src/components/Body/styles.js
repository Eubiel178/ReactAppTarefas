import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);

  @media (max-width: 1000px) {
    width: 80%;
  }
`;
