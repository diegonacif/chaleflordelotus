import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { AboutUs } from "./components/AboutUs";
import { MainGallery } from "./components/MainGallery";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AboutUs />
      <MainGallery />
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
