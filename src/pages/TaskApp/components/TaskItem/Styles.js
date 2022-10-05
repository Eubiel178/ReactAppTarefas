import styled from "styled-components";

export const Task = styled.p`
  text-align: justify;
  word-break: break-all;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input:hover {
    cursor: grab;
  }
`;

export const Text = styled.span`
  text-align: justify;
  color: ${({ color }) => color};
  padding-left: 0.5em;
`;

export const SecondSection = styled.span`
  margin-left: 1em;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Progress = styled.div`
  color: #fff;
  cursor: grab;
  border-radius: 0.3em;
  padding: 0.3em;
  background-color: ${({ background }) => background};
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
