import styled from "styled-components";

export const Text = styled.h1`
  margin-bottom: 1em;
  font-size: 2em;
  color: ${(props) => props.theme.title};

  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
