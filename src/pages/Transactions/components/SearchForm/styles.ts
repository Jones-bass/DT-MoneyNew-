import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme.gray900};
    color-adjust: ${props => props.theme.gray300};
    padding: 1rem;


    &::placeholder {
      color: ${props => props.theme.gray900};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme.green300};
    color: ${props => props.theme.green300};
    font-weight: bold;
    border-radius: 6px;

    &:hover{
      background: ${props => props.theme.green500};
      border: 1px solid ${props => props.theme.green500};
      color: ${props => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  } 
`