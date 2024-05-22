import { Envelope, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { FooterContainer, FooterFoot, FooterInner, FooterSocials } from "./styles";
import { useWindowSize } from "usehooks-ts";
import lotusLogo from "../../assets/logo.png";

export function Footer() {
  const { width } = useWindowSize()
  const currentyear = new Date().getFullYear();

  const instagramAddress = "http://www.instagram.com/chale.flordelotus";
  const facebookAddress = "https://www.facebook.com/profile.php?id=61559433050819";
  const mailAddress = "mailto:chaleflordelotus@gmail.com";

  const whatsappNumber = "558499480063"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."

  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <FooterContainer>
      <FooterInner>
        <img src={lotusLogo} alt="Flor de Lotus logo" id="lotuslogo-footer" />
        <FooterSocials>
          <WhatsappLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(whatsappAddress)}
            id="whatsapp-logo"
          />
          <InstagramLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(instagramAddress)}
            id="instagram-logo"
          />
          <FacebookLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(facebookAddress)}
            id="facebook-logo"
          />          
          <Envelope 
            size={32} 
            weight="regular" 
            onClick={() => window.open(mailAddress)}
            id="mail-logo"
          />
        </FooterSocials>
      </FooterInner>
      {/* <div>©2024 - Todos os direitos reservados</div> */}
      <FooterFoot>
        <span id="rights-reserved">© {currentyear} Chalé Flor de Lótus -  Todos os direitos reservados</span>
        <span id="developed-by" onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
      </FooterFoot>
    </FooterContainer>
  )
}