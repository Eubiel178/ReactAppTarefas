import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Task = styled.p`
  text-align: left;

  cursor: zoom-in;

  input:hover {
    cursor: grab;
  }
`;

export const Text = styled.span`
  color: ${({ color }) => color};
  padding-left: 0.5em;
  word-break: break-all;
`;

export const Container = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const Progress = styled.div`
  color: ${({ color }) => color};
  border-radius: 0.3em;
  padding: 0.3em;
  cursor: zoom-in;
  background-color: ${({ background }) => background};
  font-size: 13px;
  width: ${({ width }) => width};
  text-align: center;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const ButtonEdit = styled.button`
  border: none;
  font-size: 17px;
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
  font-size: 17px;
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0.6em;
  margin-right: 1em;
  cursor: pointer;
`;
