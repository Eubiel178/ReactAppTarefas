import styled, { keyframes } from "styled-components";

const OpenNav = keyframes`
  0% {
    width: 0em;
  }

  25%{
    width:2em;
  }

  50% {
    width:3em;  
  }

  100%{
    width:4em;  
  }
`;

const CloseNav = keyframes`
  0%{  
    width:4em ;
  }

  25% {
    width:3em ;
  }

  50%{
    width:2em;
  }

  100% {
    width: 0em;
  }
`;

export const OpenNavBarContainer = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0px;
    font-size: 1.8em;
  }

  button:nth-child(1) {
    color: ${(props) => props.theme.color};
  }

  button:nth-child(2) {
    color: red;
  }
`;

export const NavContainer = styled.nav`
  position: fixed;
  top: 0em;
  bottom: 0em;
  z-index: 2;
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  display: flex;

  button {
    background-color: transparent;
    border: 0px;
  }

  span {
    color: ${(props) => props.theme.color};
    font-size: 22px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background_navbar};
  animation: ${({ isOpen }) => (isOpen ? OpenNav : CloseNav)} 0.3s linear 1;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid transparent;
    transition-duration: 0.7s;
    margin: 1em 0em;
    padding: 0.5em 1em 0em 1em;

    :hover {
      border-color: ${(props) => props.theme.border.color};
    }
  }

  @media (max-width: 480px) {
    height: initial;
    border-radius: 0px 1em 1em 0px;
  }
`;

export const ClickAwayClose = styled.button`
  width: 100%;
  height: 100%;
`;

export const ButtonSwitchTheme = styled.button`
  span {
    color: ${(props) => props.theme.switch_theme_button.color};
  }
`;
