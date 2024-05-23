import { AttractionComponentContainer } from "./styles";
import { getSunset } from "sunrise-sunset-js";

export function Diadema() {
  const sunset = getSunset(-6.085008878241752, -37.905387572447474);
  const sunsetHour = `${sunset.getHours()}:${sunset.getMinutes()}h`

  return (
    <AttractionComponentContainer>
      <p className="mt-2">Este ponto de observação, além do nome da cidade de Martins em pedra, oferece uma vista excelente do horizonte, onde você pode ver o sol se pôr em meio às montanhas. É o local perfeito para relaxar e apreciar a beleza natural do entardecer.</p>
      <p>&nbsp;</p>
      <p>Recomendamos que você chegue no mínimo com meia hora de antecedência para aproveitar bem.</p>
      <div className="line">
        <p>Hoje o pôr do sol em Martins será às:&nbsp;</p>
        <aside>{sunsetHour}</aside>
      </div>

      <h4>Localização do mirante:</h4>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31737.5884111312!2d-37.908687071751615!3d-6.104032639025321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad52e05e7cc9b%3A0xf2dcfa13fbc5c224!2sP%C3%B4r%20do%20Sol%20do%20Diadema!5e0!3m2!1spt-BR!2sbr!4v1716462573897!5m2!1spt-BR!2sbr" 
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          tabIndex={0}
        />
      </div>
    </AttractionComponentContainer>
  )
}