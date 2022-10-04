import styled from "styled-components";

export const NavBar = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: ${({ background }) => background};
`;

export const Button = styled.button`
  padding: 1em;
  font-size: 15px;
  border: 0px;
  color: #fff;
  transition-duration: 0.5s;
  background: none;
  cursor: grab;
  border: ${({ border }) => border};

  :hover {
    border-bottom: 2px solid white;
  }
`;

export const Mode = styled(Button)`
  border-radius: 1em;
  margin-left: 1em;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  :hover {
    border: 0px;
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
    color: ${({ color }) => color};
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
