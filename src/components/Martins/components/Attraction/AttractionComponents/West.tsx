import { AttractionComponentContainer } from "./styles";

export function West() {
  return (
    <AttractionComponentContainer>
      <p className="mt-2">Divirta-se no West Acqua Park, o maior parque aquático do Rio Grande do Norte. Ele oferece uma variedade de piscinas, tobogãs e áreas de lazer para todas as idades. É o lugar perfeito para um dia de diversão com a família e amigos. Aproveite as instalações modernas e seguras enquanto se refresca e se diverte.</p>
      <p>&nbsp;</p>
      <p>O parque fica a 16km do centro de Martins, descendo a serra pela RN-117.</p>
      <p>&nbsp;</p>
      <div className="line">
        <p>Mais informações no site:&nbsp;</p>
        <aside><a href="https://westacquapark.com.br/" target="_blank">westacquapark.com.br</a></aside>
      </div>


      <h4>Localização do parque:</h4>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87223.88814365356!2d-37.93777260294767!3d-6.030144367027478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad9a92e8c3ea7%3A0xe026cbd03e31d090!2sWest%20Acqua%20Park!5e0!3m2!1spt-BR!2sus!4v1716463547926!5m2!1spt-BR!2sus" 
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