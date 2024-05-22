import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { BrowserRouter, useParams } from "react-router-dom";
import { Router } from "./Router";
import { useEffect } from "react";


export function App() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    // setTimeout(() => {
    //   refreshPage()
    // }, 1000);
  }, [params]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
