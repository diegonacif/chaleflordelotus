import styled from "styled-components";

export const AttractionComponentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: ${({ theme }) => theme['gray-600']};

  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }

  p {
    text-indent: 1.5rem;
  }

  /* h3 {
    color: ${({ theme }) => theme['gray-600']};
  } */

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-400']};
  }

  ul {
    padding-left: 1.5rem;

    li ~ li {
      margin-top: 0.375rem;
    }
  }
`