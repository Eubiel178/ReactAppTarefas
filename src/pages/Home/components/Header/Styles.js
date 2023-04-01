import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  position: relative;
  padding: 0em 1em;
  margin-bottom: 2em;
  height: 4.5em;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.background_navbar};
  box-shadow: 2px 8px 8px #00000040;
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
  border-bottom: 2px solid transparent;

  :hover {
    border-color: white;
  }

  @media (max-width: 430px) {
    font-size: 11px;
  }
`;

export const Mode = styled(Button)`
  border-radius: 0.5em;
  background: ${(props) => props.theme.switch_theme_button.background};
  color: ${(props) => props.theme.switch_theme_button.color};

  :hover {
    border-color: transparent;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  padding: 1em;
  color: ${(props) => props.theme.title};

  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
