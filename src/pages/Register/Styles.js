import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 60%;
  height: 30em;
  display: flex;
  position: relative;
  justify-content: space-between;

  @media (max-width: 866px) {
    width: 50%;
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
  left: 1.5em;
  bottom: 10px;
  display: none;

  button {
    background-color: #50a59b;
    padding: 0.5em;
    border-radius: 6px;
    margin-left: 0.5em;
    border: 0px;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.438);
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 866px) {
    display: block;
  }
`;
