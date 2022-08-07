import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ResourceListEl = styled.li`
  width: 360px;
  height: 192px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`
export const ResourceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ResourceNameLogoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ResourceNameDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ResourceLogo = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 2px;
`

export const ResourceTitle = styled.h1`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
  margin-bottom: 0px;
`
export const ResourceDescription = styled.p`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
`
export const ResourceLinkEl = styled.a`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
`
export const ResourceTag = styled.p`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
