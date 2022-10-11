import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 1.5em;
  justify-content: center;

  button {
    border: 0px;
    padding: 0.5em;
    font-size: 16px;
    width: 84.9%;
    background-color: #3085d6;
    border-radius: 0.7em;

    color: #fff;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: #3005d6;
  }
`;
