import styled from "styled-components";

interface AttractionPhotoProps {
  img: string;
}

export const AttractionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme['chale-branco']};
  color: ${({ theme }) => theme['gray-800']};

  h3 {
    margin-top: 0.5rem;
  }
`

export const AttractionPhoto = styled.div<AttractionPhotoProps>`
  width: 100%;
  max-width: 21rem;
  height: 17rem;

  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;

  filter: drop-shadow(1px 1px 4px ${({ theme }) => theme['gray-600']});

  cursor: pointer;
`