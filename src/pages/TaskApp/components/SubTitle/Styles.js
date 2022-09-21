import styled from "styled-components";

export const Feedback = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 1.5em 0em 1em 0em;
    color: #11a69b;
  }

  button {
    margin-right: 2em;
    background: none;
    border: 0px;
    color: red;
    padding: 0.5em;
    border-radius: 1.3em;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: red;
    color: #fff;
  }
`;
