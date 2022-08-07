import {Component} from 'react'
import * as Loader from 'react-loader-spinner'
import Header from '../Header'
import TabItem from '../TabItem'
import Resources from '../Resources'
import {
  HomeBgContainer,
  TabsContainer,
  SearchElement,
  SpinnerContainer,
  ResourcesContainer,
  FailedText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

const tabsList = [
  {
    tabName: 'Resources',
    tabId: 'resources',
  },
  {
    tabName: 'Requests',
    tabId: 'request',
  },
  {
    tabName: 'Users',
    tabId: 'user',
  },
]

class Home extends Component {
  state = {
    resourcesData: [],
    apiStatus: apiStatusConstants.initial,
    activeTabId: tabsList[0].tabId,
    search: '',
  }

  componentDidMount() {
    this.getResources()
  }

  onClickChangeActiveTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  getResources = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url =
      'https://media-content.ccbp.in/website/react-assignment/resources.json'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      category: eachItem.category,
      description: eachItem.description,
      iconUrl: eachItem.icon_url,
      id: eachItem.id,
      link: eachItem.link,
      tag: eachItem.tag,
      title: eachItem.title,
    }))

    if (response.status === 200) {
      this.setState({
        resourcesData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({search: event.target.value})
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

  renderResourcesSuccessView = () => {
    const {activeTabId, resourcesData} = this.state
    let formattedData
    if (activeTabId === 'resources') {
      formattedData = resourcesData
    } else
      formattedData = resourcesData.filter(
        eachItem => eachItem.tag === activeTabId,
      )
    return (
      <ResourcesContainer>
        {formattedData.map(eachItem => (
          <Resources resource={eachItem} key={eachItem.id} />
        ))}
      </ResourcesContainer>
    )
  }

  onEnterSearchResults = event => {
    const {search, resourcesData} = this.state
    if (event.key === 'Enter') {
      const searchedResourcesData = resourcesData.filter(
        eachObj => eachObj.title.toLowerCase().includes(search) === true,
      )
      this.setState({resourcesData: searchedResourcesData})
    }
  }

  renderResourcesFailureView = () => (
    <SpinnerContainer testid="loader">
      <FailedText>Loading: Failed... </FailedText>
      <RetryButton onClick={this.getResources} type="button">
        {' '}
        Retry
      </RetryButton>
    </SpinnerContainer>
  )

  renderFetchedDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderResourcesSuccessView()
      case apiStatusConstants.failure:
        return this.renderResourcesFailureView()
      default:
        return <p>null</p>
    }
  }

  render() {
    const {activeTabId, search} = this.state
    return (
      <div>
        <Header />
        <HomeBgContainer>
          <TabsContainer>
            {tabsList.map(eachTab => (
              <TabItem
                tab={eachTab}
                isActive={activeTabId === eachTab.tabId}
                key={eachTab.tabId}
                changeActiveTab={this.onClickChangeActiveTab}
              />
            ))}
          </TabsContainer>
          <SearchElement
            type="search"
            placeholder="Search"
            onChange={this.onChangeInput}
            onKeyDown={this.onEnterSearchResults}
            value={search}
          />
          {this.renderFetchedDetails()}
        </HomeBgContainer>
      </div>
    )
  }
}

export default Home
