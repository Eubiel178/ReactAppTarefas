import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${(props) => props.theme.background_page};

  ::-webkit-scrollbar {
    display: none;
  }
`;
