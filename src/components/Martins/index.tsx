import { MartinsContainer, MartinsGrid, MartinsPhoto } from "./styles";
// import img from '../../assets/DJI_0956.jpeg';
import { martinsConstants } from "../../constants/martins-constants";

export function Martins() {
  console.log(martinsConstants.map(martins => martins))

  return (
    <MartinsContainer>
      <h2>Atrações Turísticas</h2>
      <MartinsGrid>
        {
          martinsConstants.map((martins, index) => (
            <MartinsPhoto key={index} img={martins.img} url={martins.url}>
              <span>{martins.subtitle}</span>
            </MartinsPhoto>
          ))
        }
      </MartinsGrid>
    </MartinsContainer>
  )
}