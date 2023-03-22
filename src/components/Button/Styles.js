import styled, { keyframes } from "styled-components";

const buttonAnimate1 = keyframes`
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
 `;

const buttonAnimate2 = keyframes`
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
`;

const buttonAnimate3 = keyframes`
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
`;

const buttonAnimate4 = keyframes`
0% {
  bottom: -100%;
}
50%,
100% {
  bottom: 100%;
}
`;

export const ButtonItem = styled.button`
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 1em 2em;
  color: #8b80f9;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background-color: ${({ background }) => background};
  border: 0px;
  display: flex;
  justify-content: center;

  :hover {
    background-color: #8b80f9;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8b80f9, 0 0 10px #8b80f9, 0 0 #8b80f9, 0 0 #8b80f9;
  }

  div {
    height: 1em;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b80f9);
    animation: ${buttonAnimate1} 1s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #8b80f9);
    animation: ${buttonAnimate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #8b80f9);
    animation: ${buttonAnimate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #8b80f9);
    animation: ${buttonAnimate4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;
