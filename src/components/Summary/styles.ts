import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`
interface SummaryCardProps {
  variant?: 'green700';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme.gray600};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: block;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.gray300};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

    ${props => props.variant === 'green700' && css`
    background: ${props.theme.green700};

  `}


`