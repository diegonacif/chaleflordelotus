import { createGlobalStyle } from "styled-components";
import StarsLove from '../assets/fonts/StarsLove.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'StarsLove';
    src: url(${StarsLove}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-family: 'Ubuntu', sans-serif;

      a {
        text-decoration: none;
        color: inherit;
        &:focus-visible, &:focus-within, &:focus, &:active, &:target {
          border: 0;
          outline: 0;
          background-color: transparent;
        }
      }
    }

  body {
    background-color: ${({ theme }) => theme['gray-950']};
    color: ${({ theme }) => theme['gray-100']};
  }
`