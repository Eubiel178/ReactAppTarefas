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
  margin: 1em 0em 2em 1em;

  @media (max-width: 480px) {
    margin-bottom: 1em;
  }
`;

export const CloseNavBarContainer = styled.div`
  margin: 1em 0em 2em 1em;

  @media (max-width: 480px) {
    margin-bottom: 1em;
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background: transparent;
    border: 0px;
    cursor: grab;
  }

  span {
    color: ${(props) => props.theme.color};
    font-size: 2em;
  }
`;

export const NavContainer = styled.nav`
  position: fixed;
  top: 0em;
  bottom: 0em;
  z-index: 11;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background_navbar};
  animation: ${OpenNav} 0.3s linear 1;

  @media (max-width: 480px) {
    position: initial;
    flex-direction: row;
    height: 4em;
  }
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

  @media (max-width: 480px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    li {
      margin-bottom: initial;
      padding: 0.5em;

      :hover {
        border-color: initial;
      }
    }

    div {
      display: flex;
    }
  }
`;

export const ButtonSwitchTheme = styled.button`
  span {
    color: ${(props) => props.theme.switch_theme_button.color};
  }
`;
