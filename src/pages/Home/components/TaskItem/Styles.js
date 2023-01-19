import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
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
  margin-left: 1em;
  display: flex;

  align-items: center;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5em;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const PositionStyle = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5em;

  button {
    display: flex;
    align-items: center;
    border: 0px;
    cursor: pointer;
    font-size: 17px;
    background: transparent;
    border-radius: 0;
    cursor: pointer;
  }

  button:first-child {
    margin-right: 0.75em;
  }

  @media (max-width: 740px) {
    padding-bottom: 1em;
  }
`;

export const RemoveAndEdit = styled.div`
  display: flex;
`;

export const ButtonEdit = styled.button`
  border: none;
  color: ${({ color }) => color};
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  margin-right: 0.5em;
  cursor: pointer;
`;

export const ButtonRemove = styled(ButtonEdit)`
  border: none;
  color: rgb(160, 52, 52);
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  cursor: pointer;
`;
