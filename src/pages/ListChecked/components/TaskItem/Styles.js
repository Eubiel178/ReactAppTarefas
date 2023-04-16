import styled, { keyframes } from "styled-components";

// const readMoreActive = keyframes`
// 0%{

// 50%{

// 75%{
// }
// 85%{
// }
// 100%{
// }
// `;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  background-color: ${(props) => props.theme.background_button};
  border-radius: 10px;
  padding: 10px 0px 10px 10px;
`;

export const TaskDescription = styled.div`
  text-align: justify;
  word-break: break-all;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Task = styled.p`
  color: ${(props) => props.theme.color};

  button {
    background-color: transparent;
    border: transparent;
    color: #808080;
  }
`;

export const ReadMoreActive = styled.span``;

export const ConcluedButton = styled.input`
  display: block;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
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
    color: ${(props) => props.theme.color_icon};
  }

  button:first-child {
    margin-right: 0.5em;
  }
`;

export const DivButtons = styled.div`
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
  color: ${(props) => props.theme.color_icon};
`;

export const ButtonCancelEdit = styled(ButtonEdit)`
  color: #f27474;
`;

export const ButtonRemove = styled(ButtonEdit)`
  color: #f27474;
  margin-right: initial;
`;
