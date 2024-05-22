import { AttractionContainer, AttractionPhoto } from "./styles";
import { useParams } from "react-router-dom";
import { martinsConstants } from "../../../../constants/martins-constants";
import { West } from "./AttractionComponents/West";
import { Mirantes } from "./AttractionComponents/Mirantes";
import { Trilhas } from "./AttractionComponents/Trilhas";
import { Museus } from "./AttractionComponents/Museus";
import { Diadema } from "./AttractionComponents/Diadema";
import { Pedra } from "./AttractionComponents/Pedra";

export function Attraction() {
  const { attractionId } = useParams();
  const currentId = attractionId ? attractionId : 0
  const currentData = martinsConstants[Number(currentId)]

  return (
    <AttractionContainer>
      <AttractionPhoto img={currentData.img} />
      <h3>{currentData.subtitle}</h3>
      {
        currentId === "0" ? (
          <Mirantes />
        ) : currentId === "1" ? (
          <Trilhas />
        ) : currentId === "2" ? (
          <Museus />
        ) : currentId === "3" ? (
          <Diadema />
        ) : currentId === "4" ? (
          <Pedra />
        ) : currentId === "5" ? (
          <West />
        ) : <span>Wrong url</span>
      }
    </AttractionContainer>
  )
}
