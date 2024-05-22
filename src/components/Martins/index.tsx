import { MartinsContainer, MartinsGrid, MartinsPhoto } from "./styles";
// import img from '../../assets/DJI_0956.jpeg';
import { martinsConstants } from "../../constants/martins-constants";
import { Link } from "react-router-dom";

export function Martins() {
  return (
    <MartinsContainer>
      <h2>Atrações Turísticas</h2>
      <MartinsGrid>
        {
          martinsConstants.map((martins, index) => (
            <Link to={martins.url}>
              <MartinsPhoto key={index} img={martins.img} url={martins.url}>
                <span>{martins.subtitle}</span>
              </MartinsPhoto>
            </Link>
          ))
        }
      </MartinsGrid>
    </MartinsContainer>
  )
}