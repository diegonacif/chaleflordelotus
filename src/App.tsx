import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { AboutUs } from "./components/AboutUs";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AboutUs />
      <div>Fotos - Galeria de Fotos</div>
      <div>Acomodações</div>
      <div>Comodidades</div>
      <div>Atrações Locais - Galeria</div>
      <div>Nossos pacotes - Galeria</div>
      <div>Onde estamos</div>
      <div>Footer</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
