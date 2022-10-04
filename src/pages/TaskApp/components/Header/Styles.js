import styled from "styled-components";

export const HeaderContents = styled.div`
  div {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 2em;
    background: #3085d6;
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
  padding: 1em;
  border: 0px;
  border-radius: 1em;
  color: #fff;
  transition-duration: 0.5s;
  background: none;
  cursor: grab;

  :hover {
    background-color: #3005d6;
  }

  @media (max-width: 430px) {
    font-size: 11px;
  }
`;

export const Historic = styled(Button)`
  margin-left: 1em;
`;

export const Mode = styled(Historic)`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  :hover {
    background-color: ${({ background }) => background};
  }
`;
