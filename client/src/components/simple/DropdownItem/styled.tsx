import styled from "styled-components";
import {normalFont} from "../../../core/theme/fonts";



export const DropdownItem = styled.button<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${normalFont}
`

interface IProps {
    isTrigger?: boolean
}