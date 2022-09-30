import { createGlobalStyle } from "styled-components";
import { up } from "styled-breakpoints";
import { normalize } from "styled-normalize";
import ericMeyerReset from "./resets/EricMeyer";
import customResets from "./resets/customResets";

const GlobalStyles = createGlobalStyle`
  ${ericMeyerReset};
  ${normalize};
  ${customResets};
  
  html, body {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.75;


    ${up("md")} {
      font-size: 14px;
    }
  }

`;

export default GlobalStyles;
