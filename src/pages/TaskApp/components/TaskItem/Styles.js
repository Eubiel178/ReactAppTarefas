import styled from "styled-components";

export const Task = styled.div`
  text-align: justify;
  padding-left: 0.5em;
  word-break: break-all;

  span {
    text-align: justify;
    padding-left: 0.5em;
    word-break: break-all;
  }

  button {
    border: none;
    color: rgb(170, 34, 34);
    font-size: 17px;
    background-color: transparent;
    transition-duration: 0.5s;
    padding: 0.6em;
    margin-left: 3em;
  }

  button:hover {
    background-color: #d0d2d4;
    border-radius: 6px;
  }
`;
