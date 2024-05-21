import styled from "styled-components";

interface MartinsPhotoProps {
  img: string;
  url: string;
}

export const MartinsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem 3.5rem;
  background-color: ${({ theme }) => theme['chale-roxo']};

  h2 {
    color: ${({ theme }) => theme['chale-branco']};
    text-align: center;
    font-size: 1.75rem;
    padding: 0.5rem 0;
    filter: drop-shadow(1px 1px 2px ${({ theme }) => theme['gray-900']});
  }
`

export const MartinsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4rem 1rem;
  margin-top: 1rem;
`

export const MartinsPhoto = styled.div<MartinsPhotoProps>`
  position: relative;
  width: 17rem;
  height: 17rem;
  max-width: 100%;

  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;

  filter: drop-shadow(1px 1px 4px ${({ theme }) => theme['gray-600']});

  cursor: pointer;

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 135%);
    font-weight: 500;
    color: ${({ theme }) => theme['chale-branco']};
    width: max-content;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 0;
    height: 2rem;
    width: 17rem;
    background-color: ${({ theme }) => theme['chale-rosa']};
    border-radius: 0 0 4px 4px;
  }
`