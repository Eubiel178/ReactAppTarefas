import styled, { keyframes } from "styled-components";

import background from "../../images/bg.jpg";

const animateGirl = keyframes`
  0% {
    transform: translateX(calc(100% + 100vw));
  }
  50% {
    transform: translateX(calc(-100% - 100vw));
  }
  50.01% {
    transform: translateX(calc(-100% - 100vw)) rotateY(180deg);
  }
  100% {
    transform: translateX(calc(100% + 100vw)) rotateY(180deg);
  }
`;

const animateLeave = keyframes`
  0% {
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  20% {
    transform: translateX(-20px) rotate(45deg);
  }
  40% {
    transform: translateX(-20px) rotate(90deg);
  }
  60% {
    transform: translateX(20px) rotate(180deg);
  }
  80% {
    transform: translateX(-20px) rotate(45deg);
  }
  100% {
    top:110%;
    transform: translateX(20px) rotate(225deg);
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(#8b80f9, #212123); * */
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Leaves = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Set = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  div {
    position: absolute;
    display: block;

    img {
      display: block;
      width: 2.5em;
    }
  }

  div:nth-child(1) {
    left: 20%;
    animation: ${animateLeave} 20s linear infinite;
  }

  div:nth-child(2) {
    left: 50%;
    animation: ${animateLeave} 14s linear infinite;
  }

  div:nth-child(3) {
    left: 70%;
    animation: ${animateLeave} 12s linear infinite;
  }

  div:nth-child(4) {
    left: 5%;
    animation: ${animateLeave} 15s linear infinite;
  }

  div:nth-child(5) {
    left: 85%;
    animation: ${animateLeave} 18s linear infinite;
  }

  div:nth-child(6) {
    left: 90%;
    animation: ${animateLeave} 12s linear infinite;
  }

  div:nth-child(7) {
    left: 15%;
    animation: ${animateLeave} 14s linear infinite;
  }

  div:nth-child(8) {
    left: 60%;
    animation: ${animateLeave} 15s linear infinite;
  }
`;

export const Girl = styled.img`
  position: absolute;
  scale: 0.65;
  pointer-events: none;
  animation: ${animateGirl} 15s linear infinite;
`;

export const Trees = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const ContainerContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  height: 30em;

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 560px) {
    width: 400px;
    height: 31.5em;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;
