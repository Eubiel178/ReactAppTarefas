import styled from "styled-components";

export const HeaderContents = styled.nav`
  position: relative;

  div {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 2em;
    background: ${({ background }) => background};
  }
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

export const Profile = styled.section`
  position: relative;

  div {
    position: absolute;
    top: 0.1em;
    right: 0.1em;
    background-color: #000000b9;
    color: #fff;
    height: 15em;
    width: 17em;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ButtonClose = styled.section`
  width: 100%;
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

export const InfoUser = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em;

  p {
    padding-left: 0.5em;
  }
`;

export const ButtonLoggout = styled.section`
  padding-top: 2.5em;
  width: 92%;
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
  padding: 1em 0em 1em 1em;
  color: ${({ color }) => color};

  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
