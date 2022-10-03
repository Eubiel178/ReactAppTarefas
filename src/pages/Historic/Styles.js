import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) => background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  background-color: ${({ background }) => background};
  width: 30%;
  height: 90vh;
  box-shadow: 0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%),
    0 0 0 1px hsl(0deg 0% 4% / 2%);
  border-radius: 1.2em;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 769px) {
    width: 80%;
    height: 80vh;
  }
`;

export const TaskList = styled.div`
  padding: 1em 2em 1em 2em;

  color: ${({ color }) => color};
`;

export const FeedBack = styled.p`
  color: #686868;
`;
