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
  position: absolute;
  top: 1em;
  left: 1em;
`;

export const CloseNavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 1em 0em 1em;
`;

export const Container = styled.div`
  button {
    background: transparent;
    border: 0px;
    cursor: grab;
    color: ${(props) => props.theme.color_icon};
  }

  span {
    color: ${(props) => props.theme.color_icon};
    font-size: 2em;
  }
`;

export const NavContainer = styled.nav`
  position: absolute;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background_navbar};
  animation: ${OpenNav} 0.3s linear 1;
`;

export const NavContainerCloseAnimation = styled(NavContainer)`
  animation: ${CloseNav} 0.3s linear 1;
`;

export const NavItems = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid transparent;
    transition-duration: 0.7s;
    margin: 1em 0em;
    padding: 0.5em 1em 0em 1em;

    :hover {
      border-color: white;
    }
  }
`;

export const ButtonSwitchTheme = styled.button`
  span {
    color: ${(props) => props.theme.switch_theme_button.color};
  }
`;
