import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  max-width: 100vw;
  font-size: 16px;
  font-family: sans-serif;
}
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
