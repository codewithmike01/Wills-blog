import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SocialLink from './SocialLink';
import Hamburger from './Hamburger';

function HeaderNav() {
  const [menuState, setMeunuState] = useState(false);

  const handleMenu = () => {
    setMeunuState((prevState) => !prevState);
  };

  return (
    <Container className="header-nav flex j-between">
      <div className="nav-left">
        <Link to="/" className="nav-home">
          {' '}
          WillsBlog
          <h5>newsHub</h5>
        </Link>
      </div>

      <Navbar menuState={menuState} closeMenu={handleMenu} />

      <SocialLink />

      <Hamburger showMenu={handleMenu} menuState={menuState} />
    </Container>
  );
}

export default HeaderNav;

const Container = styled.div`
  padding: 1rem 0;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  .nav-left {
    h5 {
      margin-top: -10px;
      font-size: 1.2rem;
      opacity: 0.5;
    }
    .nav-home {
      font-size: 2rem;
      text-decoration: none;
      color: #fff;
    }
  }

  @media screen and (max-width: 745px) {
    .nav-left {
      .nav-home {
        position: fixed;
        top: 0;
        z-index: 3;

        h5 {
          color:  ${(menuState) => (menuState ? '#ffb000' : 'gray')};
        }
          
        }
      }
    }
  }
`;
