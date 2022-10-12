import styled from "styled-components";

export const NavBar = styled.div`
  padding: 1em;
  margin-bottom: 2em;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-bottom: ${({ border }) => border};

  :hover {
    border-bottom: 2px solid white;
  }

  @media (max-width: 430px) {
    font-size: 11px;
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

  h1 {
    font-size: 2em;
    padding: 1em;
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

  @media (max-width: 580px) {
    h1 {
      font-size: 20px;
    }
  }
`;
