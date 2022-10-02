import styled from "styled-components";

export const HeaderContents = styled.div`
  margin: 1em;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    padding: 1em 0em 1em 0em;
    color: #3085d6;
    text-align: center;
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export const Button = styled.button`
  background-color: #3085d6;
  padding: 1em;
  border: 0px;
  border-radius: 1em;
  color: #fff;
  transition-duration: 0.5s;

  button:hover {
    background-color: #3005d6;
  }
`;

export const Mode = styled(Button)`
  margin-right: 1em;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
`;
