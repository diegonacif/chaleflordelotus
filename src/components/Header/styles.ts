import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4rem;
  background-color: ${({ theme }) => theme['chale-rosa']};
  
  h2 {
    font-family: 'StarsLove';
  }

  .nav-btn {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`