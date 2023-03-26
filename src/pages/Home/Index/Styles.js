import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background: ${(props) => props.theme.background_page};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainer = styled.div`
  padding: 1em 1em 0em 1.5em;
`;

export const TaskList = styled.div`
  padding-bottom: 1em;
`;

export const FeedBack = styled.p`
  color: #686868;
`;
