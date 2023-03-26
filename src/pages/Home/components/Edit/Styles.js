import styled from "styled-components";

export const FormContainer = styled.div`
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 98%;
  }
`;

export const Button = styled.button`
  height: 100%;
  padding: 1em;
  color: #fff;
  background-color: ${(props) => props.theme.background_button};
  border-radius: 0.7em;
  border: 1px solid rgba(0, 0, 0, 0.137);
  font-size: 16px;
  transition-duration: 0.5s;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.048);

  @media (min-width: 960px) {
    margin-left: 1em;
  }
`;

export const Input = styled.input`
  padding: 1em;
  width: 45%;
  font-size: 16px;
  border: 1px solid rgb(189, 183, 183);
  border-radius: 0.7em;
  outline: 0px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.048);

  @media (max-width: 960px) {
    margin-bottom: 1em;
    width: 100%;
  }
`;
