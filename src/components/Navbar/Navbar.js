import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';

function Navbar({ menuState, handleMenu }) {
  const links = [
    { name: 'Tech', link: '/category/technology' },
    { name: 'Entertainment', link: '/category/entertainment' },
    { name: 'Politics', link: '/category/politics' },
    { name: 'Music', link: '/category/music' },
  ];

  return (
    <>
      <Container menuState={menuState}>
        <nav className="flex">
          <button type="button" className="cancel" onClick={() => handleMenu()}>
            {' '}
            &times;
          </button>

          {links.map(({ name, link }) => (
            <Link
              to={link}
              key={name}
              className="nav-link"
              onClick={() => handleMenu()}
            >
              {name}
            </Link>
          ))}
        </nav>
      </Container>
    </>
  );
}

export default Navbar;

const Container = styled.div`
  nav {
    gap: 2.5rem;
    .nav-link {
      color: #fff;
      font-size: 1.3rem;
      text-decoration: none;

      &:hover {
        color: #ffa301;
      }
    }

    .cancel {
      display: none;
      font-size: 50px;
      background-color: transparent;
      border: none;
      color: #fff;
    }
  }

  @media screen and (max-width: 745px) {
    position: fixed;
    display: ${({ menuState }) => (menuState ? 'block' : 'none')};
    z-index: 2;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    background-color: gray;
    padding: 75px 25px;
    transition: all 0.5s ease-in-out;

    nav {
      flex-direction: column;

      .nav-link {
        margin-top: -15px;
      }

      .cancel {
        margin-top: 30px;
        display: block;
        text-align: right;
        cursor: pointer;
      }
    }
  }
`;

Navbar.propTypes = {
  menuState: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};
