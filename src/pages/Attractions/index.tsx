import { Attraction } from "../../components/Martins/components/Attraction";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { WhatsappButton } from "../../components/WhatsappButton";

export function Attractions() {
  return (
    <>
      <Header />
      <Attraction />
      <Footer />

      <WhatsappButton />
    </>
  )
}