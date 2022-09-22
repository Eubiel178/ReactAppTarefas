import styled from "styled-components";

export const HeaderContents = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
    margin: 0.2em;
  }

  div button {
    background-color: #1aaaaa;
    padding: 1em;
    border: 0px;
    border-radius: 1em;
    color: #fff;
    transition-duration: 0.5s;
  }

  div button:hover {
    background-color: #119199;
  }

  h1 {
    padding: 1em 0em 1em 0em;
    color: #11a69b;
    text-align: center;
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 25px;
    }
  }
`;
