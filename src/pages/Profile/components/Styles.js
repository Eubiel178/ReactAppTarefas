import styled, { keyframes } from "styled-components";

export const animate = keyframes`
  from{
      width:0%;
  }to{
      width:100%;
    }
`;

export const UserItem = styled.div`
  margin-bottom: 0.8em;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  width: 100%;
`;

export const FormItem = styled.div``;

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;

    input {
      margin-left: 0.5em;
      padding: 1em;
      animation: ${animate} 0.5s linear 1;
      outline: none;
      border: 0px;
      border-radius: 5px;
      width: 100%;
    }
  }
`;

export const IsEditOff = styled.div`
  display: ${({ isEditITem }) => (isEditITem ? "none" : "flex")};
  align-items: center;
  color: ${(props) => props.theme.color};
  animation: ${animate} 0.5s linear 1;

  span {
    font-size: 14px;
    padding-left: 0.5em;
  }
`;

export const EditUserItem = styled.button`
  margin-left: 0.5em;
  color: ${(props) => props.theme.color};
`;

export const IsActiveEditOff = styled(EditUserItem)`
  display: ${({ isEdit }) => isEdit === false && "none"};
`;

export const Error = styled.p`
  transition-duration: 0.5s;
  transition-property: margin;
  color: #ff5b4d;
  width: 100%;
  font-size: 14px;
  font-weight: 900;
  padding-left: 2em;
`;
