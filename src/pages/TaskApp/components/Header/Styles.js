import styled from "styled-components";

export const HeaderContents = styled.div`
  div {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 2em;
    background: ${({ background }) => background};
  }
`;

export const Button = styled.button`
  margin-right: 1em;
  padding: 1em;

  border: 0px;
  color: #fff;
  transition-duration: 0.7s;
  background: none;
  cursor: grab;
  font-size: 15px;

  border-bottom: ${({ border }) => border};

  :hover {
    border-bottom: 2px solid white;
  }

  @media (max-width: 430px) {
    font-size: 11px;
  }
`;

export const Mode = styled(Button)`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 1em;

  :hover {
    border-bottom: 0px;
    background-color: ${({ background }) => background};
  }
`;

export const Title = styled.h1`
  padding: 1em 0em 1em 1em;
  color: ${({ color }) => color};

  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
