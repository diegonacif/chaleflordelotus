import { AttractionComponentContainer } from "./styles";

export function Pedra() {
  return (
    <AttractionComponentContainer>
      <p className="mt-2">A Casa de Pedra, localizada na Fazenda Trincheira, é a segunda maior caverna do Brasil em mármore, com cem metros de comprimento e formações de estalactites e estalagmites, onde também podem ser encontrados fósseis pré-históricos. A sala principal possui dezoito metros de comprimento por doze de largura, cujo teto mede dez metros.</p>
      <p>&nbsp;</p>
      <p>Recomendamos que você leve lanternas para a visitação no interior da caverna. A de celular não será o suficiente. Vá com um guia, pois após a sala principal da caverna, ela pode se mostrar um tanto labiríntica para chegar ao outro lado.</p>
      <p>É possível chegar ao local descendo a serra pela RN-117 e em seguida continuando por uma estrada de barro de 12km, ou por uma trilha de 5,5km considerada de dificuldade difícil.</p>

      <h4>Localização do mirante:</h4>
      <div className="google-map-code">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47555.52193139795!2d-37.903288376777176!3d-6.071530005622417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad137be03bb5f%3A0x5a8eacc41e6b02f8!2sCasa%20de%20Pedra!5e0!3m2!1spt-BR!2sus!4v1716463357578!5m2!1spt-BR!2sus" 
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