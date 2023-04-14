import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background_page};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
