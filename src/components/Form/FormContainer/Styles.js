import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 70%;

  @media (max-width: 480px) {
    position: absolute;
  }
`;
