import { css } from "styled-components";

const customResets = css`
  // Change from \`box-sizing: content-box\` so that \`width\` is not affected by \`padding\` or \`border\`.
  *,
  *::before,
  *::after {
    box-sizing: border-box; // 1
  }

  a {
    &,
    &:hover,
    &:focus,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.concepts.textColor};
      text-decoration: none;
      background-color: transparent; // Remove the gray background on active links in IE 10.
    }
  }

  button {
    &,
    &:hover,
    &:active,
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: bold;
    line-height: 1.5;
  }
`;

export default customResets;
