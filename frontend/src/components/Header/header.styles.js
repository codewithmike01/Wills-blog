import styled from 'styled-components';

const HamBurgerContainer = styled.div`
  display: none;

  @media screen and (max-width: 745px) {
    display: ${({ menuState }) => (menuState ? 'none' : 'flex')};
    flex-direction: column;
    gap: 7px;
    margin-top: -41px;

    .ham-line {
      display: ${({ menuState }) => (menuState ? 'none' : 'block')};
      height: 2px;
      width: 25px;
      background-color: #fff;
    }
  }
`;

export const HeaderContainer = styled.div`
  padding: 1rem 0;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  .nav-left {
    z-index: 3;
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
`;

export default HamBurgerContainer;
