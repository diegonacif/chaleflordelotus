import { MartinsContainer, MartinsGrid, MartinsPhoto } from "./styles";
import img from '../../assets/DJI_0956.jpeg';

export function Martins() {
  return (
    <MartinsContainer>
      <h2>Atrações Turísticas</h2>
      <MartinsGrid>
        <MartinsPhoto img={img} url="#">
          <span>Mirantes</span>
        </MartinsPhoto>
        <MartinsPhoto img={img} url="#">
          <span>Trilhas</span>
        </MartinsPhoto>
        <MartinsPhoto img={img} url="#">
          <span>Museus</span>
        </MartinsPhoto>
        <MartinsPhoto img={img} url="#">
          <span>Pôr do Sol - Diadema</span>
        </MartinsPhoto>
        <MartinsPhoto img={img} url="#">
          <span>Casa de Pedra</span>
        </MartinsPhoto>
        <MartinsPhoto img={img} url="#">
          <span>West Acqua Park</span>
        </MartinsPhoto>
        
      </MartinsGrid>
    </MartinsContainer>
  )
}