import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1em;
  background-color: ${(props) => props.theme.background_button};
  border-radius: 0px 10px 10px 0px;
  padding: 10px 1em 10px 0px;

  @media (max-width: 500px) {
    padding-right: 10px;
  }

  @media (min-width: 500px) {
    margin-left: 10px;
  }
`;

export const ButtonReadMore = styled.button`
  color: ${(props) => props.theme.task_item.button_readmore};
  font-weight: 900;
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
  display: flex;
  height: 100%;
  align-items: flex-start;
  word-break: break-all;
  display: flex;
  margin-left: 10px;

  span {
    color: ${(props) => props.theme.task_item.color};
  }

  @media (max-width: 500px) {
    margin-left: 10px;
  }

  @media (min-width: 500px) {
    margin-left: 10px;
  }
`;

export const Task = styled.p`
  button {
    font-size: 14px;
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
`;

export const ReadMoreActive = styled.span`
  background-color: blue;
  font-weight: 600;
`;

export const ConcluedButton = styled.input`
  display: block;
  width: 1.2em;
  height: 1.2em;
  margin: 10px 10px 0px 0px;

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

export const ButtonEdit = styled.button`
  margin-right: 0.5em;

  a {
    color: ${(props) => props.theme.color_icon};
  }
`;

export const ButtonCancelEdit = styled(ButtonEdit)`
  margin-right: initial;
  color: #f27474;
`;

export const ButtonRemove = styled(ButtonCancelEdit)`
  margin-right: initial;
`;
