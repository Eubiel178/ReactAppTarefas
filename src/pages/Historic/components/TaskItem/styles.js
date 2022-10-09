import styled from "styled-components";

export const Task = styled.li`
  text-align: justify;
  word-break: break-all;
  padding-bottom: 1em;
  color: ${({ color }) => color};
`;
