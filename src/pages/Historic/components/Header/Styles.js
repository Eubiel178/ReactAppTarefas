import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  background: #3085d6;
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
    font-size: 13px;
  }
`;

export const Mode = styled(Button)`
  margin-left: 1em;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  :hover {
    background-color: ${({ background }) => background};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-top: 1.5em;

  h1 {
    color: #3085d6;
  }

  button {
    margin-right: 2em;
    background: none;
    border: 0px;
    color: red;
    padding: 0.5em;
    border-radius: 1.3em;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: red;
    color: #fff;
  }

  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
