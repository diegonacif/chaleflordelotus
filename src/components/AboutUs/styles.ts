import styled from "styled-components";
import letterBg from "../../assets/lotus-bg.jpg";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const AboutUsContainer = styled.section`
  
  background-color: ${({ theme }) => theme['chale-branco']};
  color: ${({ theme }) => theme['gray-950']};
  padding: 1.75rem 0.75rem;
  height: max-content;

  background: url(${letterBg});
  background-size: cover;
  background-position: bottom center;

  p {
    background-color: rgba(215, 75, 116, 0.875);
    padding: 0.75rem;
    border-radius: 4px;
    color: ${({ theme }) => theme['chale-branco']};
    font-size: 1.125rem;
    font-weight: 500;
    text-indent: 2rem;
  }


  p ~ p {
    margin-top: 1rem;
  }

  @media ${deviceBreakpoint.tablet} {
    display: flex;
    justify-content: center;

    p {
      max-width: 75vw;
    }
  }
`