import styled from "styled-components";

export const List = styled.div`
  border-radius: 10px 10px 0px 0px;
  background: ${(props) => props.theme.background_card};
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 1em 10px;
`;
