import styled from 'styled-components'

export const PageButton = styled.button`
  border-color: ${props => (props.isActive ? 'black' : 'transparent')};
  border-radius: 11px;
`
