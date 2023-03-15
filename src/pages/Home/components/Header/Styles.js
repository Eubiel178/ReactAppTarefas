import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  position: relative;
  padding: 0em 1em;
  margin-bottom: 2em;
  height: 4em;
  justify-content: space-between;
  align-items: center;
  background: ${({ background }) => background};
`;

export const Button = styled.button`
  margin-right: 1em;
  padding: 0.5em;
  border: 0px;
  color: #fff;
  transition-duration: 0.7s;
  background: none;
  cursor: grab;
  font-size: 15px;
  border-bottom: ${({ border }) => border};

  :hover {
    border-bottom: 2px solid white;
  }

  @media (max-width: 430px) {
    font-size: 11px;
  }
`;

export const Mode = styled(Button)`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 0.5em;

  :hover {
    border-bottom: 0px;
    background-color: ${({ background }) => background};
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  padding: 1em;
  color: ${({ color }) => color};

  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
