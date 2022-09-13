import styled from "styled-components";

export const NavBarContent = styled.div`
  padding: 1em 0em;
  background-color: #43bc70;
`;

export const NavItens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding-left: 2em;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 0.5em;
    margin-right: 1em;
    border-radius: 10px;
    transition-duration: 0.5s;
  }

  a:hover {
    background-color: #25613b;
  }
`;
