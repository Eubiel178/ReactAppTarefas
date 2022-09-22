import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  background-color: #fff;
  width: 60%;
  height: 90vh;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border: solid 2px 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
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

export const MainContainer = styled.div`
  padding: 1em 1em 0em 2em;
`;

export const TaskList = styled.div`
  margin-left: 0.5em;
`;

export const FeedBack = styled.p`
  color: #686868;
`;
