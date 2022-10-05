import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Task = styled.p`
  text-align: justify;
  word-break: break-all;
  cursor: zoom-in;

  input:hover {
    cursor: grab;
  }
`;

export const Text = styled.span`
  text-align: justify;
  color: ${({ color }) => color};
  padding-left: 0.5em;
`;

export const Container = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const Progress = styled.div`
  color: #fff;

  border-radius: 0.3em;
  padding: 0.3em;
  cursor: zoom-in;
  background-color: ${({ background }) => background};
  width: ${({ width }) => width};
  text-align: center;

  @media (max-width: 1020px) {
    font-size: 12px;
  }

  @media (max-width: 645px) {
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
  margin-right: 1em;
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
