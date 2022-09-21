import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  background-color: #fff;
  width: 90vh;
  height: 90vh;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border: solid 2px 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 1em;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainer = styled.div`
  padding: 1em 1em 0em 2em;
`;

export const TaskList = styled.div`
  margin-left: 0.5em;
`;

export const FeedBack = styled.p`
  color: #686868;
`;
