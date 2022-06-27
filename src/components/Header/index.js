/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SocialLink from './SocialLink';
import Banner from '../Banner.js';
import TextMassage from './TextMassage';

function index() {
  return (
    <Container className="column">
      <div className="header-nav flex j-between">
        <div className="nav-left">
          <Link to="/" className="nav-home">
            {' '}
            WillsBlog
            <h5>newsHub</h5>
          </Link>
        </div>

        <Navbar />

        <SocialLink />
      </div>
      <Banner />

      <TextMassage />
    </Container>
  );
}

export default index;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  .header-nav {
    padding: 1rem 5rem;
    align-items: center;
  }

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
`;
