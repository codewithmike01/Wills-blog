import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';

function Navbar({ menuState, closeMenu }) {
  const links = [
    { name: 'Tech', link: '/category/technology' },
    { name: 'Entertainment', link: '/category/entertainment' },
    { name: 'Politics', link: '/category/politics' },
    { name: 'Music', link: '/category/music' },
  ];

  return (
    <Container style={{ display: menuState ? 'block' : 'none' }}>
      <nav className="flex">
        <button type="button" className="cancel" onClick={() => closeMenu()}>
          {' '}
          &times;
        </button>

        {links.map(({ name, link }) => (
          <Link
            to={link}
            key={name}
            className="nav-link"
            onClick={() => closeMenu()}
          >
            {name}
          </Link>
        ))}
      </nav>
    </Container>
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
    z-index: 2;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    background-color: gray;
    padding: 75px 25px;

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
  closeMenu: PropTypes.func.isRequired,
  menuState: PropTypes.bool.isRequired,
};
