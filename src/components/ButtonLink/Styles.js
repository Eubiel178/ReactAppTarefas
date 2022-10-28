import styled from "styled-components";

export const Container = styled.div`
  padding-top: 12em;
`;

export const Button = styled.button`
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

  a {
    color: #fff;
    text-decoration: none;
  }
`;
