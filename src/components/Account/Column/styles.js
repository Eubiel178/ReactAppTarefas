import styled from "styled-components";

export const AsideContainer = styled.div`
  width: 100%;
  background-color: #3085d6;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 866px) {
    display: none;
  }
`;

export const SecondText = styled.span`
  padding-left: 3em;
`;

export const LinkContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 1em;
  bottom: 1em;

  a {
    background-color: #fff;
    padding: 0.5em;
    border-radius: 6px;
    margin-left: 0.5em;
    border: 1px solid;
    transition-duration: 0.5s;
    color: black;
    text-decoration: none;
  }
`;
