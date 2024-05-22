import { AboutUs } from "../../components/AboutUs";
import { Accommodations } from "../../components/Accommodations";
import { Conveniences } from "../../components/Conveniences";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IntroBanner } from "../../components/IntroBanner";
import { MainGallery } from "../../components/MainGallery";
import { Martins } from "../../components/Martins";
import { OurLocation } from "../../components/OurLocation";

export function Main() {
  return (
    <>
      <Header />
      <IntroBanner />
      <AboutUs />
      <MainGallery />
      <Accommodations />
      <Conveniences />
      <Martins />
      <OurLocation />
      <Footer />
    </>
  )
}