import styled from "styled-components";

export const NavBar = styled.nav`
  position: relative;
  height: 5em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 2em;
  background: ${({ background }) => background};
`;

export const Button = styled.button`
  margin-right: 1em;
  padding: 1em;
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
  border-radius: 1em;

  :hover {
    border-bottom: 0px;
    background-color: ${({ background }) => background};
  }
`;

export const User = styled.div`
  top: 1em;
  right: 1em;
  position: absolute;
  background-color: #000000b9;
  color: #fff;
  height: 15em;
  width: 17em;
  border-radius: 1em;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1em;

  button {
    background: none;
    border: none;
    color: #fff;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;

  p {
    padding-left: 0.5em;
  }
`;

export const ButtonLoggout = styled.div`
  padding: 2.5em 0em 0em 0.8em;
  display: flex;
  justify-content: flex-start;

  button {
    cursor: grab;
    background: none;
    border: none;
    color: #fff;
    font-size: 17px;
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
