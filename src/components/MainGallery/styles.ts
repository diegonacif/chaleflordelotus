import styled from "styled-components";

interface MainGalleryPhotoProps {
  img: string;
}

export const MainGalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme['chale-roxo']};

  h2 {
    color: ${({ theme }) => theme['chale-branco']};
    text-align: center;
    font-size: 1.75rem;
    padding: 0.5rem 0;
    filter: drop-shadow(1px 1px 2px ${({ theme }) => theme['gray-900']});
  }
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
  border-radius: 4px;

  filter: drop-shadow(1px 1px 4px ${({ theme }) => theme['gray-600']});

  cursor: pointer;
`