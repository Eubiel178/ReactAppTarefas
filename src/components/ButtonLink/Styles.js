import styled from "styled-components";

export const Text = styled.p`
  padding-top: 2em;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 370px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #3085d6;
  padding: 0.5em;
  border-radius: 6px;
  margin-left: 0.5em;
  border: 0px;
  transition-duration: 0.5s;
  font-size: 16px;

  :hover {
    background-color: #3005d6;
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
