import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`
export const TabsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const SearchElement = styled.input`
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  width: 350px;
  height: 40px;
  outline: none;
  margin-top: 10px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto';
  @media screen and (min-width: 680px) {
    width: 670px;
  }
`
export const SpinnerContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const ResourcesContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
