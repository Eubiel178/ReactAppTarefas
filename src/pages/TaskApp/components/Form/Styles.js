import styled from "styled-components";

export const Container = styled.div`
  input {
    margin: 0em 1em 0em 0em;
    height: 2.5em;
    padding: 0em 6em 0em 1em;
    padding-left: 1em;
    border-radius: 5px;

    font-size: 16px;

    border: 1px solid rgb(189, 183, 183);
    border-radius: 0.7em;
    outline: 0px;

    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.048);
    outline: 0px;
  }

  button {
    height: 2.5em;
    margin-right: 1em;
    padding: 0em 1em 0em 1em;
    color: #fff;
    background-color: ${({ backgroundButton }) => backgroundButton};
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    font-size: 16px;
    transition-duration: 0.5s;
  }

  button:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.192);
    background-color: ${({ buttonHover }) => buttonHover};
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 1em;
    }
  }
`;
