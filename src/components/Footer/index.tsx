import lotusLogo from "../../assets/logo.png";
import { Envelope, FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react";
import { FooterContainer, FooterFoot, FooterInner, FooterSocials } from "./styles";

export function Footer() {

  const currentyear = new Date().getFullYear();

  const instagramAddress = "http://www.instagram.com/bee.takes";
  const facebookAddress = "https://www.facebook.com/profile.php?id=61553302315879&mibextid=ZbWKwL";
  const tiktokAddress = "https://www.tiktok.com/@bee.takes?_t=8kHAB64HwpB&_r=1";
  const mailAddress = "mailto:beetakes.drones@gmail.com";

  const whatsappNumber = "558499480063"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  const whatsappAddress = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=`
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
          <TiktokLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(tiktokAddress)}
            id="tiktok-logo"
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