import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 60%;
  height: 30em;
  display: flex;
  position: relative;
  justify-content: space-between;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border: solid 2px 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);

  @media (max-width: 866px) {
    border-radius: 1.2em;
  }

  @media (max-width: 580px) {
    width: 70%;
  }

  @media (max-width: 410px) {
    width: 90%;
  }
`;

export const Register = styled.p`
  position: absolute;
  left: 3em;
  bottom: 10px;
  color: #3085d6;
  display: none;

  button {
    background-color: #3085d6;
    padding: 0.5em;
    border-radius: 6px;
    margin-left: 0.5em;
    border: 0px;
    transition-duration: 0.5s;
    font-size: 16px;
  }

  button:hover {
    background-color: #3005d6;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 866px) {
    display: block;
  }
`;
