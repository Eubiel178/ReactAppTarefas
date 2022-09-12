import styled from "styled-components";

export const SectionContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  position: relative;
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
