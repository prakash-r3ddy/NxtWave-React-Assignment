import {ListElement, ListButton, ListName} from './styledComponents'

const TabItem = props => {
  const {tab, isActive, changeActiveTab} = props
  const {tabName, tabId} = tab

  const getTabId = () => {
    changeActiveTab(tabId)
  }
  return (
    <ListElement>
      <ListButton isActive={isActive} onClick={getTabId}>
        <ListName isActive={isActive}>{tabName}</ListName>
      </ListButton>
    </ListElement>
  )
}

export default TabItem
