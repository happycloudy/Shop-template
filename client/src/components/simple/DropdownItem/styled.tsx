import styled, {css, keyframes} from "styled-components";
import {normalFont} from "../../../core/theme/fonts";

const TriggerArrow = css`
  &::after {
    content: ' ';
    position: absolute;
    right: -15px;
    top: 17px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #6E18C0;
    transition: 0.2s;
  }
`

const TriggerArrowActive = css`
  &::after {
    transform: rotate(-90deg);
  }
`

const activeMenu = css`
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  width: 100%;
`

const revealAnimation = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const animatedMixin = css`
  animation: ${revealAnimation} ${props => props.theme.transitions.normal};
`

export const DropdownItem = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 10px;
  transition: ${props => props.theme.transitions.normal};
  user-select: none;

  ${normalFont};
  ${props => props.animated && animatedMixin}
  ${props => props.active && activeMenu};
  ${props => props.isTrigger && `${TriggerArrow} ${props.active && TriggerArrowActive}`};
`

interface IProps {
    isTrigger?: boolean
    active?: boolean
    animated?: boolean
}