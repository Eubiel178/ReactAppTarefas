import styled from "styled-components";

export const Text = styled.p`
  margin: 2em 0em;
  color: #8b80f9;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 370px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  color: #fff;
  padding: 0.5em;
  border-radius: 6px;
  margin-left: 0.5em;
  border: 0px;
  transition-duration: 0.5s;
  font-size: 16px;
  color: black;
  background-color: #fff;
  border: 0px;

  :hover {
    background: #8b80f9;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8b80f9, 0 0 10px #8b80f9, 0 0 #8b80f9, 0 0 #8b80f9;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0.5em;
    margin-left: 0.3em;
  }

  @media (max-width: 370px) {
    font-size: 10px;
  }
`;
