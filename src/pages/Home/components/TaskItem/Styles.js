import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  div:nth-child(2) {
    align-self: stretch;
  }
`;

export const TaskDescription = styled.div``;

export const Task = styled.p`
  text-align: justify;
  word-break: break-all;
  cursor: zoom-in;

  input:hover {
    cursor: grab;
  }
`;

export const Text = styled.span`
  color: ${({ color }) => color};
  padding-left: 0.5em;
`;

export const Container = styled.div`
  margin-left: 0.5em;
  display: flex;
  align-items: flex-start;
`;

export const ActionContainer = styled.div`
  display: flex;
  padding: 0em 0.5em;
  align-items: center;
  position: sticky;
  top: 0.5em;
  flex-wrap: wrap;

  button {
    cursor: pointer;
  }
`;

export const PositionStyle = styled.div`
  display: flex;

  button {
    border: none;
    background: transparent;
    padding: 0.5em;
    font-size: 17px;
  }

  button:first-child {
    margin-right: 0.5em;
  }
`;

export const RemoveAndEdit = styled.div`
  display: flex;

  button {
    border: none;
    background: transparent;
    padding: 0.5em;
    font-size: 17px;
  }
`;

export const ButtonEdit = styled.button`
  margin-right: 0.5em;
  color: ${({ color }) => color};
`;

export const ButtonRemove = styled(ButtonEdit)`
  color: rgb(160, 52, 52);
  margin-right: initial;
`;
