import styled from "styled-components";

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background_card};
`;

export const Container = styled(Loading)`
  background-color: transparent;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.background_card};
  box-shadow: 0 15px 25px #00000030;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  border: solid 1px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    border: initial;
    box-shadow: initial;
    height: 100vh;
    width: 100%;
    border-radius: 0px;
    background: ${(props) => props.theme.background_page};
  }
`;

export const UserProgress = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  svg,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    display: block;
    width: 40em;
    height: 40em;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export const User = styled.div`
  position: absolute;
  color: ${(props) => props.theme.color};
  font-weight: 900;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextContainer = styled.div`
  background-color: ${(props) => props.theme.background_grafic_text};
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  padding: 0.8em 0em;
  border-top: solid 1px rgba(0, 0, 0, 0.5);

  span {
    background-color: ${({ color }) => color};
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border-radius: 50%;
  }
`;
