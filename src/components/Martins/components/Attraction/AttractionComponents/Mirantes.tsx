import { AttractionComponentContainer } from "./styles";

export function Mirantes() {
  return (
    <AttractionComponentContainer>
      <p className="mt-2">Os mirantes de Martins oferecem vistas panorâmicas deslumbrantes das montanhas e vales ao redor. Aproveite para relaxar e admirar a paisagem enquanto desfruta de uma refeição ou um café em um dos restaurantes locais situados nesses pontos elevados. Os mirantes são perfeitos para tirar fotos incríveis e apreciar a beleza natural da região.</p>

      <div>
        <h3>Principais Mirantes:</h3>
        <span>Clique e veja no mapa</span>
        <ul>
          <li>
            <a href="https://maps.app.goo.gl/33TS1iU9CMRzg8Mg6" target="_blank">
              Mirante do Canto
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/DGVX7FGPxzUSiSsy7" target="_blank">
              Mirante da Carranca
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/njZMZn1UpL2Egxe56" target="_blank">
              Mirante Penhasco
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/duqyjWGdRHmPHfuN6" target="_blank">
              Mirante Encanto da Serra
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/3Js7Ewa318qD83BB6" target="_blank">
              Mirante Mãe Guilé
            </a>
          </li>
        </ul>
      </div>
    </AttractionComponentContainer>
  )
}