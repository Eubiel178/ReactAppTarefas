import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#8b80f9, #212123);
`;

export const ContainerContent = styled.div`
  width: 50%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(139, 128, 249, 0.6);

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    border-radius: initial;
  }
`;
