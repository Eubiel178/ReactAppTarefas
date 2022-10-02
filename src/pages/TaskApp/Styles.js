import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) => background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  position: relative;
  background-color: ${({ background }) => background};
  width: 60%;
  height: 90vh;
  box-shadow: 5px 5px 5px black;
  border-radius: 1.2em;

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 769px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 4em;
  left: 1em;

  @media (max-width: 376px) {
    width: 80%;
  }
`;

export const MainContainer = styled.div`
  padding: 1em 1em 0em 2em;
`;

export const TaskList = styled.div`
  margin-left: 0.5em;

  color: ${({ color }) => color};
`;

export const FeedBack = styled.p`
  color: #686868;
`;
