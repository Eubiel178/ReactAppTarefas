import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:arial;
}

body::-webkit-scrollbar {
  display: none;
}


button{
  cursor: pointer ;
  background: none;
  border: none;
}

a{
  color: initial;
}
`;
