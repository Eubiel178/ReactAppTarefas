import styled from "styled-components";

export const ContainerContent = styled.div`
  background-color: ${({ background }) => background};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainer = styled.div`
  padding: 1em 1em 0em 1.5em;
`;

export const TaskList = styled.div`
  color: ${({ color }) => color};
  padding-bottom: 1em;
`;

export const FeedBack = styled.p`
  color: #686868;
`;
