import {Component} from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import * as Loader from 'react-loader-spinner'

import Pagination from '../Pagination'
import Header from '../Header'
import ReactPopUp from '../ReactPopUp'

import {
  ResourceItemContainer,
  ResourceInfoContainer,
  BackArrText,
  NavLink,
  ResourceLogo,
  ResourceHeading,
  ResourceLink,
  HeadingLinkContainer,
  ResourceDescription,
  UpdateButton,
  ItemsTextInputContainer,
  ItemsText,
  InputContainer,
  InputElSortButtonContainer,
  InputEl,
  SearchContainer,
  SortContainer,
  TableHeading,
  TableRow,
  TableHead,
  Table,
  TableColumn,
  TableBody,
  SpinnerContainer,
  FailedText,
  RetryButton,
  CheckBoxEl,
  AnchorEl,
  AddDeletePaginationContainer,
  AddDeleteButtonsContainer,
  AddButton,
  DeleteButton,
  AddNavLink,
} from './styledComponets'

const apiStatusConstants = {
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class ResourceItem extends Component {
  state = {
    resourceItemData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    singlePageData: [],
    resourcesData: [],
    checkedResourcesList: [],
  }

  componentDidMount() {
    this.getResourceItemData()
  }

  getResourceItemData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {
      const formattedData = {
        title: data.title,
        link: data.link,
        description: data.description,
        iconUrl: data.icon_url,
      }
      const resourceItems = data.resource_items
      const searchedResources = resourceItems.filter(eachItem =>
        eachItem.title.toLowerCase().includes(searchInput),
      )
      this.setState({
        apiStatus: apiStatusConstants.success,
        resourcesData: searchedResources,
        singlePageData: searchedResources.slice(0, 6),
        resourceItemData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <SpinnerContainer testid="loader">
      <Loader.TailSpin
        color="#0284c7"
        height={80}
        type="ThreeDots"
        width={80}
      />
    </SpinnerContainer>
  )

  pageHandler = page => {
    const {resourcesData} = this.state
    let updatedSinglePageData
    if (resourcesData.length < 6) {
      updatedSinglePageData = resourcesData
    } else {
      updatedSinglePageData = resourcesData.slice(page * 6 - 6, page * 6)
    }
    this.setState({
      singlePageData: updatedSinglePageData,
    })
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getResourceItemData()
    }
  }

  sortResourcesData = sortedData => {
    this.setState({
      resourcesData: sortedData,
      singlePageData: sortedData.slice(0, 6),
    })
  }

  OnClickGetRowId = event => {
    const {checkedResourcesList} = this.state
    if (event.target.checked) {
      const id = event.target.value
      this.setState({checkedResourcesList: [...checkedResourcesList, id]})
    } else {
      const newList = checkedResourcesList.filter(
        eachItem => eachItem !== event.target.value,
      )
      this.setState({checkedResourcesList: newList})
    }
  }

  onClickDeleteSelectedItems = () => {
    const {checkedResourcesList, resourcesData} = this.state
    const updatedList = resourcesData.filter(
      eachItem => checkedResourcesList.includes(eachItem.id) === false,
    )
    this.setState({
      resourcesData: updatedList,
      singlePageData: updatedList.slice(0, 6),
      checkedResourcesList: [],
    })
  }

  renderResourceItemsSuccessView = () => {
    const {
      singlePageData,
      resourceItemData,
      searchInput,
      resourcesData,
      checkedResourcesList,
    } = this.state
    const {iconUrl, description, title, link} = resourceItemData
    return (
      <ResourceItemContainer>
        <NavLink to="/home">
          <MdOutlineArrowBackIos />
          <BackArrText>Resources</BackArrText>
        </NavLink>
        <ResourceInfoContainer>
          <ResourceLogo src={iconUrl} alt="resource" />
          <HeadingLinkContainer>
            <ResourceHeading>{title}</ResourceHeading>
            <ResourceLink href={link} target="_blank">
              {link}
            </ResourceLink>
          </HeadingLinkContainer>
        </ResourceInfoContainer>
        <ResourceDescription>{description}</ResourceDescription>
        <UpdateButton>UPDATE</UpdateButton>
        <ItemsTextInputContainer>
          <ItemsText>Items</ItemsText>
          <InputElSortButtonContainer>
            <InputContainer>
              <SearchContainer>
                <FiSearch />
              </SearchContainer>
              <InputEl
                type="search"
                onChange={this.onChangeInput}
                onKeyDown={this.onEnterSearch}
                value={searchInput}
              />
            </InputContainer>
            <SortContainer>
              <ReactPopUp
                data={resourcesData}
                sortResourcesData={this.sortResourcesData}
              />
            </SortContainer>
          </InputElSortButtonContainer>
        </ItemsTextInputContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading> </TableHeading>
              <TableHeading>TITLE</TableHeading>
              <TableHeading>DESCRIPTION</TableHeading>
              <TableHeading>LINK</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {singlePageData.map(eachItem => (
              <TableRow
                key={eachItem.id}
                isChecked={checkedResourcesList.includes(eachItem.id)}
              >
                <TableColumn>
                  <CheckBoxEl
                    type="checkbox"
                    id={eachItem.id}
                    value={eachItem.id}
                    onClick={this.OnClickGetRowId}
                  />
                </TableColumn>
                <TableColumn>{eachItem.title}</TableColumn>
                <TableColumn>{eachItem.description}</TableColumn>
                <TableColumn>
                  <AnchorEl href={eachItem.link} target="_blank">
                    {eachItem.link}
                  </AnchorEl>
                </TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AddDeletePaginationContainer>
          <AddDeleteButtonsContainer>
            <AddNavLink to="/add-resource">
              <AddButton isActive={checkedResourcesList.length === 0}>
                ADD
              </AddButton>
            </AddNavLink>
            <DeleteButton
              isActive={checkedResourcesList.length > 0}
              onClick={this.onClickDeleteSelectedItems}
            >
              DELETE
            </DeleteButton>
          </AddDeleteButtonsContainer>
          <Pagination data={resourcesData} pageHandler={this.pageHandler} />
        </AddDeletePaginationContainer>
      </ResourceItemContainer>
    )
  }

  renderFailureView = () => (
    <SpinnerContainer testid="loader">
      <FailedText>Loading: Failed... </FailedText>
      <RetryButton onClick={this.getResources} type="button">
        {' '}
        Retry
      </RetryButton>
    </SpinnerContainer>
  )

  renderResourceItems = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderResourceItemsSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return <p>null</p>
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderResourceItems()}
      </>
    )
  }
}

export default ResourceItem
