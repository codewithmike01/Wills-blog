/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Hamburger(props) {
  const { showMenu, menuState } = props;
  return (
    <Container
      className="flex column"
      style={{ display: menuState ? 'none' : 'flex' }}
      onClick={() => showMenu()}
    >
      <span className="ham-line"></span>
      <span className="ham-line"></span>
      <span className="ham-line"></span>
    </Container>
  );
}

export default Hamburger;
const Container = styled.div`
  gap: 7px;
  display: none;
  cursor: pointer;
  .ham-line {
    display: block;
    height: 2px;
    width: 25px;
    background-color: #fff;
  }

  @media screen and (max-width: 745px) {
    display: flex;
  }
`;

Hamburger.propTypes = {
  showMenu: PropTypes.func.isRequired,
  menuState: PropTypes.bool.isRequired,
};
