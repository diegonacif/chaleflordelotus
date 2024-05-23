import { useWindowSize } from "usehooks-ts";
import { IntroBannerContainer } from "./styles";

export function IntroBanner() {
  const { width } = useWindowSize()

  const whatsappNumber = "5584981033283"
  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <IntroBannerContainer>
      <button onClick={() => window.open(whatsappAddress)}>Consultar disponibilidade</button>
    </IntroBannerContainer>
  )
}