import styled from "styled-components";

export const AsideContent = styled.div`
  width: 100%;
  background-color: #50a59b;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    padding-left: 3em;
  }

  div {
    width: 100%;
    position: absolute;
    left: 1em;
    bottom: 1em;
  }

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

  a:hover {
    background-color: rgba(0, 0, 0, 0.438);
    color: #fff;
  }

  @media (max-width: 866px) {
    display: none;
  }
`;
