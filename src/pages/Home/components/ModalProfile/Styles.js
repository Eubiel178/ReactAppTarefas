import styled from "styled-components";

export const ContainerModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #00000099;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid ${({ borderBottom }) => borderBottom};
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
  margin-bottom: 2em;

  img {
    border-radius: 10em;
    border: 1px solid ${({ color }) => color};
    display: block;
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
    color: ${({ color }) => color};
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
    background-color: ${({ background }) => background};
  }
`;
