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

export const MainContainer = styled.div`
  padding: 1em 1em 0em 1.5em;
  height: 100%;
`;

export const TaskList = styled.div`
  padding-bottom: 1em;
`;

export const FeedBack = styled.p`
  color: #686868;
`;
