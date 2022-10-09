import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0.5em 1em;
  }

  section label {
    color: #3085d6;
    padding-bottom: 1em;
  }

  section input {
    font-size: 16px;
    padding: 0.5em;
    border: 1px solid rgb(189, 183, 183);
    border-radius: 0.7em;
    outline: 0px;
  }
`;
