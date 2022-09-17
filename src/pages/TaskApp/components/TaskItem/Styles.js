import styled from "styled-components";

export const Task = styled.div`
  text-align: justify;
  word-break: break-all;
`;

export const Text = styled.span`
  text-align: justify;
  padding-left: 0.5em;
  //word-break: break-all;
`;

export const IconsContainer = styled.span`
  margin-left: 3em;

  button:hover {
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

  :hover {
    background-color: #d0d2d4;
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

  :hover {
    background-color: #d0d2d4;
    border-radius: 6px;
  }
`;
