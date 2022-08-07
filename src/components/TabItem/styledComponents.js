import styled from 'styled-components'

export const ListElement = styled.li`
  display: flex;
  flex-wrap: wrap;
`

export const ListButton = styled.button`
  height: 40px;
  width: 200px;
  background: ${props =>
    props.isActive ? '#0B69FF' : 'rgba(215, 223, 233, 0.24)'};
  border: 1px solid #d7dfe9;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
`

export const ListName = styled.h1`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => (props.isActive ? '#ffffff' : '#171f46')};
`
