import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ResourceItemContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`
export const BackArrText = styled.p`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`
export const ResourceInfoContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 20px;
`
export const ResourceLogo = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50px;
`
export const HeadingLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
export const ResourceHeading = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #171f46;
  font-family: 'roboto';
  margin-bottom: 0px;
`
export const ResourceLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto';
  color: #0b69ff;
  margin-top: 0px;
`
export const ResourceDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto';
  color: #7e858e;
`
export const UpdateButton = styled.button`
  height: 40px;
  background: #0b69ff;
  border-radius: 4px;
  width: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  border: none;
`
export const ItemsTextInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ItemsText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-family: 'roboto';
  color: #171f46;
`
export const InputElSortButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SearchContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  border-right: 0px;
  padding-left: 10px;
`
export const InputEl = styled.input`
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  height: 40px;
  border-left: 0px;
  outline: none;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`
export const SortContainer = styled.div`
  margin-left: 10px;
`
export const TableHeading = styled.th`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
`
export const TableRow = styled.tr`
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: ${props =>
    props.isChecked ? 'rgba(215, 223, 233, 0.24);' : '#ffffff'};
`
export const TableHead = styled.thead``
export const Table = styled.table`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  border-collapse: collapse;
`
export const TableBody = styled.tbody``
export const TableColumn = styled.td`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  padding-left: 20px;
  padding-right: 20px;
`

export const SpinnerContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const FailedText = styled.h1`
  font-family: 'roboto';
`
export const RetryButton = styled.button`
  border: none;
  height: 30px;
  width: 80px;
  background-color: black;
  border-radius: 2px;
  color: #ffffff;
  font-family: 'roboto;';
`
export const CheckBoxEl = styled.input``
export const AnchorEl = styled.a`
  font-family: 'roboto';
  text-decoration: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
`
export const AddDeletePaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`
export const AddDeleteButtonsContainer = styled.div``
export const AddButton = styled.button`
  border-radius: 4px;
  background: ${props => (props.isActive ? '#2dca73' : '#D7DFE9')};
  height: 40px;
  width: 107px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto';
  color: #ffffff;
`
export const DeleteButton = styled.button`
  background: ${props => (props.isActive ? '#ff0b37' : '#D7DFE9')};
  border-radius: 4px;
  height: 40px;
  width: 107px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto';
  color: #ffffff;
  margin-left: 10px;
`
export const AddNavLink = styled(Link)``
