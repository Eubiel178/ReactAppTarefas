import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) => background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  border-radius: 1.2em;
  background-color: ${({ background }) => background};
  overflow: hidden;
  overflow-y: auto;
  width: 60%;
  height: 90vh;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border: solid 2px 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 950px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

export const TaskList = styled.ul`
  padding: 3em 3.5em;
  font-size: 18px;

  color: ${({ color }) => color};
`;

export const FeedBack = styled.p`
  color: #686868;
`;
