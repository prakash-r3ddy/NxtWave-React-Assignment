import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AddItemContainer = styled.div`
  background: #f5f5f5;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 90vh;
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const ResourceText = styled.p`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 100px;
`
export const DeatilsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const FormHeading = styled.h1`
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #171f46;
  font-family: 'roboto';
`
export const LabelElement = styled.label`
  height: 16px;
  width: 68px;
  left: 200px;
  top: 327px;
  border-radius: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #7e858e;
  font-family: 'roboto';
  margin-top: 15px;
`
export const InputElement = styled.input`
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  height: 40px;
  width: 320px;
  left: 200px;
  top: 351px;
  border-radius: 2px;
  outline: none;
  font-family: 'roboto';
`
export const CreateButton = styled.button`
  width: 93px;
  height: 40px;
  border-radius: 4px;
  padding: 8px, 20px, 8px, 20px;
  background: #0b69ff;
  font-family: 'roboto';
  color: #ffffff;
  margin-top: 10px;
  border: none;
  cursor: pointer;
`
export const ImageEl = styled.img``
export const ErrorText = styled.p`
  font-family: 'roboto';
  color: red;
`
