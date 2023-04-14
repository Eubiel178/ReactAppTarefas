import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;
`;

export const StyledInput = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px 5px;
    font-size: 16px;
    color: #fff;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #cccbd5;

    ::-webkit-input-placeholder {
      color: #cccbd5;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:active {
      transition: background-color 9999s ease-in-out 0s;
      -webkit-text-fill-color: #fff;
    }
  }

  button {
    cursor: grab;
    position: absolute;
    right: 0em;
    margin: 10px 5px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: #fff;
  }
`;

export const Label = styled.label`
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

export const Error = styled.p`
  color: #ff5b4d;
  width: 100%;
  font-size: 14px;
  margin-top: 1em;
  font-weight: 900;
`;
