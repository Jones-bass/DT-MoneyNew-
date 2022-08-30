import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${props => props.theme.gray900};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme.green500};
  color: ${props => props.theme.white};
  font-size: bold;
  padding: 0 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.green700};
    transition: background-color 0.2s;
  }
`
