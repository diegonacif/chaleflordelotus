import { MainGalleryContainer, MainGalleryGrid, MainGalleryPhoto } from "./styles";
import { mainGalleryConstants } from "../../constants/main-gallery-constants";

export function MainGallery() {
  return (
    <MainGalleryContainer>
      <h2>Galeria de Fotos</h2>
      <MainGalleryGrid>
        {
          mainGalleryConstants.map((photo, index) => (
            <MainGalleryPhoto key={index} img={photo.img} />
          ))
        }
      </MainGalleryGrid>
    </MainGalleryContainer>
  )
}