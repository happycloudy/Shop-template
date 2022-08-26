import styled from "styled-components";
import {Header} from "../../ui/Header/styled";
import {normalFont} from "../../../core/theme/fonts";

export const HeaderInfo = styled(Header)`
  padding-top: 27px;
  padding-bottom: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  ${normalFont}
`