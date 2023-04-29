import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1em;
  width: 100%;
`;

export const StyledInput = styled.div`
  position: relative;
  width: 100%;

  input {
    padding: 10px 5px;
    font-size: 16px;
    color: #8f2c24;
    outline: none;
    border-radius: 10px;
    display: inline-block;
    border: 1px solid #8f2c24;
    cursor: pointer;
    font-weight: 500;
    outline: none;
    border-radius: 10px;
    width: 100%;

    ::-webkit-input-placeholder {
      color: #cccbd5;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset;
      transition: background-color 9999s ease-in-out 0s;
      -webkit-text-fill-color: #8f2c24;
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    font-size: 20px;
    background: transparent;
    border: none;
    color: #8f2c24;
  }
`;

export const Label = styled.label`
  padding: 10px 0px;
  font-size: 16px;
  color: #8f2c24;
  pointer-events: none;
  transition: 0.5s;
`;

export const Error = styled.p`
  color: #ff5b4d;
  width: 100%;
  font-size: 14px;
  margin-top: 0.5em;
  font-weight: 900;
`;
