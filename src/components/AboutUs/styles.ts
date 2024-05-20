import styled from "styled-components";

export const AboutUsContainer = styled.section`
  background-color: ${({ theme }) => theme['chale-branco']};
  color: ${({ theme }) => theme['gray-950']};
  padding: 0.75rem;

  p ~ p {
    margin-top: 1rem;
  }
`