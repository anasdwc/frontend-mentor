import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/700.css";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Epilogue';
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  img {
    max-width: 100%
  }
`;

export default GlobalStyles;
