import styled from "styled-components";

export const Text = styled.p`
  margin: 2em 0em;
  color: #8f2c24;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 0.3em;
  border-radius: 6px;
  margin-left: 0.5em;
  border: 0px;
  transition-duration: 0.5s;
  font-size: 16px;
  color: #8f2c24;
  background-color: #fff;
  border: 0px;
  font-size: 12px;

  :hover {
    background: #8f2c24;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8f2c24 0 0 10px #8f2c24 0 0 #8f2c24 0 0 #8f2c24;
  }
`;
