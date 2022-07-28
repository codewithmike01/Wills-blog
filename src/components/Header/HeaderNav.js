import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SocialLink from './SocialLink';
import Hamburger from './Hamburger';

function HeaderNav() {
  return (
    <Container className="header-nav flex j-between">
      <div className="nav-left">
        <Link to="/" className="nav-home">
          {' '}
          WillsBlog
          <h5>newsHub</h5>
        </Link>
      </div>

      <Hamburger />
      <SocialLink />
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
    z-index:3;
    h5 {
      color: gray;
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
        
        z-index: 3;

        h5 {
          color: #ffa301;
        }
          
        }
      }
    }
  }
`;
