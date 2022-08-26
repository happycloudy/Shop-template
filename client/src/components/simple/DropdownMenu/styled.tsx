import styled from "styled-components";

export const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 100%;
  width: 100%;

  & > *:last-child {
    border-bottom-right-radius: ${props => props.theme.borders.main};
    border-bottom-left-radius: ${props => props.theme.borders.main};
  }
`