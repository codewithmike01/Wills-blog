/* eslint-disable react/self-closing-comp */

import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import HamBurgerContainer from './header.styles';

function Hamburger({ menuState, handleMenu }) {
  return (
    <>
      <HamBurgerContainer onClick={() => handleMenu()} menuState={menuState}>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </HamBurgerContainer>
      <Navbar menuState={menuState} handleMenu={handleMenu} />
    </>
  );
}

export default Hamburger;

Hamburger.propTypes = {
  menuState: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};
