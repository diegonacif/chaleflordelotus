import styled from "styled-components";

export const TaxesContainer = styled.section`
  background-color: ${({ theme }) => theme['chale-branco']};
  color: ${({ theme }) => theme['gray-800']};
  padding: 1.5rem 0.75rem;

  h2 {
    text-align: center;
  }
`

export const TaxesCalculator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  .inputs-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .calc-input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: max-content;
  
      input {
        height: 2rem;
        width: 5rem;
        margin-top: 0.25rem;
  
        text-align: center;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme['chale-roxo']};
      }
    }
  }

  .calc-total {
    margin-top: 0.75rem;
    text-align: center;

    span:first-of-type {
      font-weight: 500;
    }
  }

  #calc-obs {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-500']};
  }

`

export const TaxesLists = styled.div`
  margin-top: 1rem;

  ul {
    li {
      list-style-position: inside;
      padding-left: 0.5rem;
  
      &:first-of-type {
        margin-top: 0.5rem;
      }

      & ~ li {
        margin-top: 0.25rem;
      }
    }
  }

`