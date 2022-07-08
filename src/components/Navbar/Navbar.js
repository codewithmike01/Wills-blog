import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  const links = [
    { name: 'Tech', link: '/technology' },
    { name: 'Entertainment', link: '/entertainment' },
    { name: 'Politics', link: '/politics' },
    { name: 'Music', link: '/music' },
  ];
  return (
    <Container>
      <nav className="flex">
        {links.map(({ name, link }) => (
          <Link to={link} key={name} className="nav-link">
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
  }
`;
