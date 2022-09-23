import styled from "styled-components";

export const Task = styled.p`
  text-align: justify;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
  position: relative;

  input:hover {
    cursor: grab;
  }
`;

export const Clock = styled.div`
  position: absolute;
  color: #fff;
  background-color: #1aaaaa;
  padding: 0.3em;
  border-radius: 1.2em;
  right: 0em;
  top: 3.5em;
  text-align: center;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border: solid 2px 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);

  button {
    background-color: transparent;

    border: 0px;
    padding: 1em;
    color: #fff;
  }
`;

export const Text = styled.span`
  text-align: justify;
  padding-left: 0.5em;
`;

export const IconsContainer = styled.span`
  margin-left: 1em;
  display: flex;
  align-items: center;
  height: 100%;
  /Eubiel178/ReactAppTarefas/upload/main button:hover {
    background-color: #d0d2d4;
    border-radius: 6px;
  }
`;

export const ButtonEdit = styled.button`
  border: none;
  font-size: 17px;
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  margin-right: 1em;
  cursor: pointer;

  :hover {
    background: #11a69b;
    border-radius: 6px;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  color: rgb(160, 52, 52);
  font-size: 17px;
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  margin-right: 1em;
  cursor: pointer;

  :hover {
    background-color: #d0d2d4;
    border-radius: 6px;
  }
`;

export const ButtonClock = styled.button`
  border: none;
  font-size: 20px;
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  margin-right: 1em;
  cursor: pointer;

  :hover {
    background-color: #d0d2d4;
    border-radius: 6px;
  }
`;
