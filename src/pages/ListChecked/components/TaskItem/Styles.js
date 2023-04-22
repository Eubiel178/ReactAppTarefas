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
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1em;
  background-color: ${(props) => props.theme.background_button};
  border-radius: 0px 10px 10px 0px;
  padding: 10px 1em 10px 0px;
  border-left: solid 4px #00ff80;
`;

export const UrgencyButtonBorder = styled.button`
  position: absolute;
  background-color: ${({ color }) => color};
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
`;

export const TaskDescription = styled.div`
  text-align: justify;
  word-break: break-all;
  display: flex;
  span {
    color: ${(props) => props.theme.taskitem.color};
  }

  span:nth-child(1) {
    padding-right: ${({ activeReadMore }) =>
      !activeReadMore === true ? "0px" : "0.5em"};
  }

  span:nth-child(2) {
    margin-right: ${({ activeReadMore }) =>
      !activeReadMore === true ? "0.5em" : "0px"};
  }

  @media (max-width: 500px) {
    margin-left: 10px;
  }

  @media (min-width: 500px) {
    margin-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  padding-left: 10px;

  @media (min-width: 500px) {
    margin-left: 10px;
  }
`;

export const Task = styled.p`
  button {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }

  span:nth-child(1) {
    padding-right: ${({ isReadMoreActive }) =>
      isReadMoreActive ? "0px" : "0.5em"};
  }

  span:nth-child(2) {
    margin-right: ${({ isReadMoreActive }) =>
      isReadMoreActive ? "0.5em" : "0px"};
  }

  button:nth-child(2) {
    color: ${(props) => props.theme.taskitem.button_readmore};
    margin-top: 1em;
  }
`;

export const ReadMoreActive = styled.span`
  background-color: blue;
  font-weight: 600;
`;

export const ConcluedButton = styled.input`
  display: block;
  width: 1.2em;
  height: 1.2em;
  margin: 10px 0px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Container = styled.div`
  margin-left: 0.5em;
  display: flex;
  align-items: flex-start;
`;

export const ActionContainer = styled.div`
  display: flex;
  padding: 0em 0.2em;
  align-items: center;

  button {
    cursor: pointer;
  }
`;

export const ActionContainerInMobile = styled(ActionContainer)`
  flex-direction: column;
  align-items: center;
`;

export const PositionStyle = styled.div`
  display: flex;

  button {
    border: none;
    background: transparent;
    padding: 0.5em;
  }

  button:first-child {
    margin-right: 0.5em;

    @media (max-width: 500px) {
      margin-right: 0.2em;
    }
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
export const ButtonRemove = styled.button`
  color: #f27474;
`;
