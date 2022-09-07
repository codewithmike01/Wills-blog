/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

function Hamburger({ menuState, handleMenu }) {
  return (
    <>
      <Container onClick={() => handleMenu()}>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </Container>
      <Navbar menuState={menuState} handleMenu={handleMenu} />
    </>
  );
}

export default Hamburger;
const Container = styled.div`
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

Hamburger.propTypes = {
  menuState: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};
