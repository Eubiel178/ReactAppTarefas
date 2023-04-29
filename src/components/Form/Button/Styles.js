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
  padding: 10px 5px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  background: #8f2c24;
  font-weight: 500;
  transition: 0.5s;
  color: #fff;
  outline: none;
  border-radius: 10px;
  border: 1px solid #8f2c24;
  display: flex;
  justify-content: center;

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
    background: linear-gradient(90deg, transparent, #d64c42);
    animation: ${buttonAnimate1} 1s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #d64c42);
    animation: ${buttonAnimate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #d64c42);
    animation: ${buttonAnimate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #d64c42);
    animation: ${buttonAnimate4} 1s linear infinite;
    animation-delay: 0.75s;
  }

  :hover {
    background-color: #d64c42;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #d64c42, 0 0 10px #d64c42, 0 0 #d64c42, 0 0 #d64c42;

    span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #8f2c24);
      animation: ${buttonAnimate1} 1s linear infinite;
    }

    span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #8f2c24);
      animation: ${buttonAnimate2} 1s linear infinite;
      animation-delay: 0.25s;
    }

    span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #8f2c24);
      animation: ${buttonAnimate3} 1s linear infinite;
      animation-delay: 0.5s;
    }

    span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #8f2c24);
      animation: ${buttonAnimate4} 1s linear infinite;
      animation-delay: 0.75s;
    }
  }
`;
