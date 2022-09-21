import styled from "styled-components";

export const Container = styled.div`
  input {
    margin: 1em 1em 0em 0em;
    height: 2.5em;
    padding: 0em 6em 0em 1em;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    font-size: 15px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.048);
    outline: 0px;
  }

  button {
    height: 2.5em;
    margin-right: 1em;
    padding: 0em 1em 0em 1em;
    color: #fff;
    background-color: #43bc70;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    font-size: 15px;
    transition-duration: 0.5s;
  }

  button:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.192);
    background-color: #3a8555;
  }

  @media (max-width: 474px) {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 1em;
    }
  }
`;
