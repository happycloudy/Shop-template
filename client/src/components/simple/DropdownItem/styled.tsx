import styled, {css} from "styled-components";
import {normalFont} from "../../../core/theme/fonts";

const TriggerArrow = css`
    &::after {
      content: ' ';
      position: absolute;
      right: -15px;
      top: 8px;
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



export const DropdownItem = styled.button<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  ${normalFont}
  
  ${props => props.isTrigger && `
    ${TriggerArrow}
    ${props.active && TriggerArrowActive}
  `}
`

interface IProps {
    isTrigger?: boolean
    active?: boolean
}