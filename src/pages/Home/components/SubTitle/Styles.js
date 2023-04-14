import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h2`
  margin-top: 1.5em;
  color: ${(props) => props.theme.title};
`;

export const CompletedTasks = styled.p`
  padding: 1em 0em;
  color: #686868;
`;

export const RemainingTasks = styled.p`
  padding-bottom: 2em;
  color: #686868;
`;

export const Button = styled.button`
  margin-right: 2em;
  background: none;
  border: 0px;
  color: #f27474;
  padding: 0.5em;
  border-radius: 0.5em;
  transition-duration: 0.5s;

  :hover {
    background-color: #f27474;
    color: #fff;
  }
`;
