import styled from "styled-components";

export const HeaderContents = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 1em;
  }

  div button {
    background-color: #3085d6;
    padding: 1em;
    border: 0px;
    border-radius: 1em;
    color: #fff;
    transition-duration: 0.5s;
  }

  div button:hover {
    background-color: #3005d6;
  }

  h1 {
    padding: 1em 0em 1em 0em;
    color: #3085d6;
    text-align: center;
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 25px;
    }
  }
`;
