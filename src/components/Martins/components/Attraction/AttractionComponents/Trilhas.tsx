import { AttractionComponentContainer } from "./styles";

export function Trilhas() {
  return (
    <AttractionComponentContainer>
      <p>Explore as trilhas de Martins e conecte-se com a natureza. Com diversos níveis de dificuldade, as trilhas levam a cachoeiras escondidas, mirantes impressionantes e áreas de preservação ambiental. Caminhe pelos caminhos tranquilos, respire o ar puro da serra e descubra a flora e fauna local.</p>
      <p>Recomendamos fortemente que contrate um guia para acompanhá-lo. Aqui estão nossas sugestões de guias locais:</p>

      <span className="mt-2">clique no nome para contato por Whatsapp:</span>
      <ul className="mt-1">
        <li>
          <a href="https://wa.me/5584998310156">
            Roni Filho
          </a>
        </li>
        <li>
          <a href="https://wa.me/">
            Felipe Querino
          </a>
        </li>
        <li>
          <a href="https://wa.me/">
            Tida
          </a>
        </li>
      </ul>

      
      <h3>Trilhas:</h3>
      <ul className="mt-1">
        <li><strong>Trilha da Pedra do Sapo:</strong> <i>leve</i></li>
        <li><strong>Trilha da Pedra Rajada:</strong> <i>moderada</i></li>
        <li><strong>Trilha da Cachoeira da Umarizeira:</strong> <i>moderada a pesada</i></li>
        <li><strong>Trilha da Casa de Pedra:</strong> <i>pesada</i></li>
      </ul>
    </AttractionComponentContainer>
  )
}