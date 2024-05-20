import { MainGalleryContainer, MainGalleryGrid, MainGalleryPhoto } from "./styles";
import img from '../../assets/DJI_0956.jpeg';

export function MainGallery() {
  return (
    <MainGalleryContainer>
      <h2>Galeria de Fotos</h2>
      <MainGalleryGrid>
        <MainGalleryPhoto img={img} />
        <MainGalleryPhoto img={img} />
        <MainGalleryPhoto img={img} />
        <MainGalleryPhoto img={img} />
      </MainGalleryGrid>
    </MainGalleryContainer>
  )
}