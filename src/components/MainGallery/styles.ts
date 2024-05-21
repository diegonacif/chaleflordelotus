import styled from "styled-components";

interface MainGalleryPhotoProps {
  img: string;
}

export const MainGalleryContainer = styled.section`
  padding: 1rem 0.75rem 1.5rem;
`

export const MainGalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3rem 1rem;
  margin-top: 1rem;
`

export const MainGalleryPhoto = styled.div<MainGalleryPhotoProps>`
  width: 17rem;
  height: 17rem;
  max-width: 100%;

  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
`