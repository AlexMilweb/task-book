import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 14px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1, ul {
    margin: 0;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
    margin: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;
