import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { AboutUs } from "./components/AboutUs";
import { MainGallery } from "./components/MainGallery";
import { Accommodations } from "./components/Accommodations";
import { Conveniences } from "./components/Conveniences";
import { Martins } from "./components/Martins";
import { Packs } from "./components/Packs";
import { OurLocation } from "./components/OurLocation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroBanner } from "./components/IntroBanner";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <IntroBanner />
      <AboutUs />
      <MainGallery />
      <Accommodations />
      <Conveniences />
      <Martins />
      <Packs />
      <OurLocation />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
