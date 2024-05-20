import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4rem;
  background-color: ${({ theme }) => theme['chale-rosa']};
  
  h2 {
    font-family: 'StarsLove';
  }
`