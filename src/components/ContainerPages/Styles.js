import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background_page};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
