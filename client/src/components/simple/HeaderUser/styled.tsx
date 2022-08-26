import styled, {css, keyframes} from "styled-components";
import {normalFont} from "../../../core/theme/fonts";

const activeAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(100px);
    opacity: 0;
  }
`

const activeAnimationMixin = css`
  animation: ${activeAnimation} ${props => props.theme.transitions.normal};
`


export const HeaderUser = styled.button`
  background: transparent;
  margin: 0;
  padding: 10px 20px;
  transition: 0.2s;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  border-radius: ${props => props.theme.borders.main};

  ${normalFont};

  &:hover {
    background: ${props => props.theme.colors.lightBlue};
  }

  &:focus {
    ${activeAnimationMixin};
  }
`