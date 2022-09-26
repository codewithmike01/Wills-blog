import { useState } from 'react';
import { Link } from 'react-router-dom';

import SocialLink from './SocialLink';
import Hamburger from './Hamburger';
import { HeaderContainer } from './header.styles';

function HeaderNav() {
  const [menuState, setMeunuState] = useState(false);

  const handleMenu = () => {
    setMeunuState((prevState) => !prevState);
  };
  return (
    <HeaderContainer className="header-nav flex j-between">
      <div className="nav-left">
        <Link to="/" className="nav-home" onClick={() => handleMenu()}>
          {' '}
          WillsBlog
          <h5>newsHub</h5>
        </Link>
      </div>

      <Hamburger menuState={menuState} handleMenu={handleMenu} />
      <SocialLink />
    </HeaderContainer>
  );
}

export default HeaderNav;
