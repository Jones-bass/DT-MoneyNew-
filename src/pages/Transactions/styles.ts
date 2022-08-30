import styled from "styled-components"

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  
  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme.gray700};

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

  }
  `
  interface PriceHighLightProps {
    variant: 'income' | 'outcome';
  }

  export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? 
    props.theme.green300 : props.theme.red300}
  `