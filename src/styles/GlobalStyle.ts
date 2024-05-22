import { createGlobalStyle } from 'styled-components';

export const theme = {
  breakPoints: {
    mobile: '768px',
  },
};

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Poppins', sans-serif;

    --color-primary: #020154;
    --color-secondary: #CD428D;
    --color-lightblue: #E3E3FF;
    --color-white: #fefefe;
    --color-red: #f75252;
    --border-radius: 10px;
    --backdrop-color: #00000080;
    --lightest-blue: rgb(245, 245, 255)
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }


  html,
  body {
    width: 100%;
    min-height: 100vh;
  }

  body {
    height: 100vh;
  }

  section {
    scroll-snap-align: start;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body, input, button, textarea {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
    transition: filter 0.3s;
  }
`;

export default GlobalStyle;
