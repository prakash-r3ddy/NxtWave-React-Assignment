import {Component} from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'

import Header from '../Header'

import {
  AddItemContainer,
  NavLink,
  ResourceText,
  FormContainer,
  DeatilsContainer,
  FormHeading,
  LabelElement,
  InputElement,
  CreateButton,
  ImageEl,
  ErrorText,
} from './styledComponents'

const apiStatusConstants = {
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class AddResourceItem extends Component {
  state = {
    itemName: '',
    link: '',
    description: '',
    resourceName: '',
    apiStatus: apiStatusConstants.initial,
    showErrorMsg: false,
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeItemName = event => {
    this.setState({itemName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({link: event.target.value})
  }

  onChangeResourceName = event => {
    this.setState({resourceName: event.target.value})
  }

  updateResources = async () => {
    const {link, resourceName, description, itemName} = this.state
    const data = {
      name: itemName,
      ItemLink: link,
      resource: resourceName,
      SourceDescription: description,
    }
    const url =
      'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
    const options = {
      method: 'UPDATE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await (url, options)
    alert('Item Added Successfully!!')
  }

  onSubmitDetails = event => {
    const {link, resourceName, description, itemName} = this.state
    event.preventDefault()
    if (
      link !== '' &&
      resourceName !== '' &&
      description !== '' &&
      itemName !== ''
    ) {
      this.updateResources()
      this.setState({showErrorMsg: false})
    } else {
      console.log('false')
      this.setState({showErrorMsg: true})
    }
  }

  render() {
    const {link, resourceName, description, itemName, showErrorMsg} = this.state
    return (
      <>
        <Header />
        <AddItemContainer>
          <DeatilsContainer>
            <NavLink to="/home">
              <MdOutlineArrowBackIos />
              <ResourceText>Resources</ResourceText>
            </NavLink>
            <FormContainer onSubmit={this.onSubmitDetails}>
              <FormHeading>Item Details</FormHeading>
              <LabelElement htmlFor="itemName">ITEM NAME</LabelElement>
              <InputElement
                type="text"
                id="itemName"
                onChange={this.onChangeItemName}
                value={itemName}
              />
              <LabelElement htmlFor="link">LINK</LabelElement>
              <InputElement
                type="text"
                id="link"
                onChange={this.onChangeLink}
                value={link}
              />
              <LabelElement htmlFor="resource">RESOURCE NAME</LabelElement>
              <InputElement
                type="text"
                id="resource"
                onChange={this.onChangeResourceName}
                value={resourceName}
              />
              <LabelElement htmlFor="description">DESCRIPTION</LabelElement>
              <InputElement
                type="text"
                id="description"
                onChange={this.onChangeDescription}
                value={description}
              />
              <CreateButton type="submit">CREATE</CreateButton>
              {showErrorMsg && (
                <ErrorText>Fill all fields with valid details !!</ErrorText>
              )}
            </FormContainer>
          </DeatilsContainer>
          <ImageEl
            src="https://res.cloudinary.com/dciu5crui/image/upload/v1659863455/Group_3_e6x6rj.png"
            alt="profile"
          />
        </AddItemContainer>
      </>
    )
  }
}

export default AddResourceItem
