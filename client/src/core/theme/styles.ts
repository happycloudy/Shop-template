import {createGlobalStyle} from "styled-components";

const globalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: transparent;
    border: none;
  }
`

export default globalStyles