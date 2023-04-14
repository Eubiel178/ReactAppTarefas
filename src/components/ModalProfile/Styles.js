import styled from "styled-components";

export const ContainerModal = styled.div`
  height: 100%;
  color: ${(props) => props.theme.color};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
  border-bottom: solid 1px ${(props) => props.theme.color};
`;

export const Loggout = styled.button`
  cursor: grab;
  background: none;
  border: none;
  color: red;
  font-size: 24px;
`;

export const InfoUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 2em;

  img {
    display: block;
    border-radius: 50%;
    width: 230px;
    height: 210px;
    box-shadow: 6px 6px 8px #00000030;
  }

  label {
    cursor: grab;
  }

  div {
    position: absolute;
    top: 45%;
    left: 15%;
    font-weight: 900;

    input {
      display: none;
    }
  }
`;

export const UserItem = styled.div`
  display: flex;
  font-weight: 400;
  padding-bottom: 1em;
  display: flex;
  align-items: center;
`;

export const Action = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    color: #fff;
    width: 48%;
    padding: 0.8em 1em;
    border-radius: 10em;
    border: 1px solid #00000017;
    box-shadow: 6px 6px 8px #00000030;
  }

  button:nth-child(1) {
    background-color: #d33;
  }

  button:nth-child(2) {
    background-color: ${(props) => props.theme.background_button};
  }
`;
