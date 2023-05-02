import styled, { keyframes } from "styled-components";

const animateModal = keyframes`
 0% {
     transform: scale(0);
 }
 
 45% {
     transform: scale(0.75);
 }

 80% {
     transform: scale(.95);
 }
 
 100% {
     transform: scale(1);
 }
`;

export const MainContainer = styled.div`
  padding: 1em 1.5em 0em 1.5em;
  height: 100%;
`;

export const BlockedContent = styled(MainContainer)`
  color: ${(props) => props.theme.color};
  font-weight: 600;
  animation: ${animateModal} 0.5s linear 1;

  strong {
    margin: 0px 5px;
    background: #ffce30;
    padding: 0em 0.3em;
    border-radius: 5px;
    color: black;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1em;
  background-color: ${(props) => props.theme.background_card};
  padding: 1em;
  border-radius: 10px;

  form {
    display: flex;
    align-items: center;
  }

  @media (max-width: 590px) {
    border-radius: 10px 10px 0px 0px;

    form {
      flex-direction: column;
    }
  }
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;

  input,
  button {
    width: 18em;
    padding: 1em 0.5em;
    border-radius: 10px;
    border: none;
  }

  label {
    margin: 1em 0em;
  }

  button {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color};
    margin-top: 1em;
    background-color: ${(props) => props.theme.background_button};

    div {
      height: 1em;
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.background_card};
  padding: 1em;
  border-radius: 10px 10px 0px 0px;
  animation: ${animateModal} 0.5s linear 1;

  @media (max-width: 560px) {
    div:first-child {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 350px;

  img {
    display: block;
    border-radius: 15px;
    width: 100%;
    height: 270px;
    box-shadow: 2px 3px 2px #00000030;
  }

  label {
    cursor: pointer;
  }

  div {
    position: absolute;
    top: 45%;
    left: 30%;

    font-weight: 900;

    input {
      display: none;
    }
  }

  button {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    color: #3085d6;
    font-size: 25px;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;

    img {
      width: 230px;
      height: 210px;
      border-radius: 50%;
      height: 100%;
      box-shadow: 6px 6px 8px #00000030;
    }
  }
`;

export const Content = styled.form`
  margin-top: 1em;
  height: 100%;
`;

export const InformationContainer = styled.div`
  font-weight: 900;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  button {
    color: #fff;
    border-radius: 10px;
    padding: 0.5em 0em;
    font-weight: 900;
    display: flex;
    justify-content: center;

    div {
      height: 1em;
    }
  }

  button:nth-child(1) {
    background-color: #d33;
    width: 45%;
  }

  button:nth-child(2) {
    background-color: #3085d6;
    width: 45%;
  }
`;
