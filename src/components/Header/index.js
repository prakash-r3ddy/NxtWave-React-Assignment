import {Link} from 'react-router-dom'
import {
  HeaderBgContainer,
  ImageEl,
  ProfileLogo,
  LogoutButton,
  ProfileLogoutContainer,
} from './styledComponent'

const Header = () => (
  <HeaderBgContainer>
    <Link to="/home">
      <ImageEl
        src="https://res.cloudinary.com/dciu5crui/image/upload/v1659694310/react-assignment/NxtWave_TM_Coloured_logo_1app-logo_bsziez.png"
        alt="app-logo"
      />
    </Link>
    <ProfileLogoutContainer>
      <ProfileLogo
        src="https://res.cloudinary.com/dciu5crui/image/upload/v1659694479/react-assignment/imageprofile-logo_w7g2id.png"
        alt="profile"
      />
      <Link to="/">
        <LogoutButton>Logout</LogoutButton>
      </Link>
    </ProfileLogoutContainer>
  </HeaderBgContainer>
)

export default Header
