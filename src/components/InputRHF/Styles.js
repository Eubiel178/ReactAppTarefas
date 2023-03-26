import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  ::-webkit-input-placeholder {
    color: #fff;
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    border-radius: 10px;
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
  width: 80%;
  font-size: 0.6rem;
`;
