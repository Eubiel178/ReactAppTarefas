import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 98%;
  }
`;

export const Button = styled.button`
<<<<<<< HEAD
  height: 100%;
=======
  display: flex;
  justify-content: center;
>>>>>>> b4f17f380709b6957ce56e728757bdfa4d9d7cc1
  padding: 1em;
  color: #fff;
  background-color: ${(props) => props.theme.background_button};
  border-radius: 0.7em;
  border: 1px solid rgba(0, 0, 0, 0.137);
  font-size: 16px;
  height: 100%;
  width: 5em;
  margin-left: 1em;

<<<<<<< HEAD
  @media (min-width: 960px) {
    margin-left: 1em;
=======
  div {
    height: 1em;
    width: 100%;
  }

  @media (max-width: 960px) {
    margin-left: initial;
    width: 100%;
>>>>>>> b4f17f380709b6957ce56e728757bdfa4d9d7cc1
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
