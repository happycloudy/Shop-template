import styled from "styled-components";
import {headerBigFont} from "../../core/theme/fonts";

export const NavItem = styled.span`
  background: transparent;
  margin: 0;
  padding: 10px 20px;
  transition: 0.2s;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: ${props => props.theme.borders.main};
  ${headerBigFont}

  &:hover {
    background: ${props => props.theme.colors.lightBlue};
  }
`