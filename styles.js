import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: rgb(36, 39, 43)
    ;
    font-family: system-ui;
  }
`;
