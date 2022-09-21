import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 1em;

  label {
    padding-bottom: 1em;
  }

  input {
    font-size: 16px;
    padding: 0.5em;
   
    border: 1px solid rgb(189, 183, 183);
    border-radius: 0.7em;
    outline: 0px;
  }
`;
