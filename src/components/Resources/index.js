import {
  ResourceListEl,
  ResourceInfoContainer,
  ResourceNameLogoCard,
  ResourceNameDescriptionContainer,
  ResourceLogo,
  ResourceTitle,
  ResourceDescription,
  ResourceLinkEl,
  ResourceTag,
  NavLink,
} from './styledComponents'

const Resources = props => {
  const {resource} = props
  const {category, description, iconUrl, id, link, title} = resource
  return (
    <ResourceListEl>
      <ResourceInfoContainer>
        <NavLink to={`/resource/${id}`}>
          <ResourceNameLogoCard>
            <ResourceLogo src={iconUrl} alt="resource logo" />
            <ResourceNameDescriptionContainer>
              <ResourceTitle>{title}</ResourceTitle>
              <ResourceTag>{category}</ResourceTag>
            </ResourceNameDescriptionContainer>
          </ResourceNameLogoCard>
        </NavLink>
      </ResourceInfoContainer>
      <ResourceLinkEl href={link} target="_blank">
        {link}
      </ResourceLinkEl>
      <ResourceDescription>{description}</ResourceDescription>
    </ResourceListEl>
  )
}

export default Resources
