import styled, { keyframes } from "styled-components";

const animateModal = keyframes`
 0% {
     transform: scale(0);
 }
 
 45% {
     transform: scale(0.75);
 }

 80% {
     transform: scale(.95);
 }
 
 100% {
     transform: scale(1);
 }
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 20em;
  height: 20em;
  background-color: ${(props) => props.theme.background_navbar};
  animation: ${animateModal} 0.5s linear 1;
  border-radius: 10px;
  padding: 1em;

  span {
    color: ${(props) => props.theme.color};
  }
`;

export const Loading = styled(Modal)`
  animation: initial;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonUrgency = styled.button`
  display: flex;
  align-items: center;

  div {
    background-color: ${({ color }) => color};
    height: 2em;
    width: 2em;
    border-radius: 1em;
    margin-right: 0.5em;
  }
`;

export const UrgencyListColors = styled.div`
  margin-top: 3em;
  height: 7em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
