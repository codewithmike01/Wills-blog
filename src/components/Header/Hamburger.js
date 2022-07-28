/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

function Hamburger() {
  const [menuState, setMeunuState] = useState(false);

  const handleMenu = () => {
    setMeunuState((prevState) => !prevState);
  };
  return (
    <>
      <Container className="flex column" onClick={() => handleMenu()}>
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
  .ham-line {
    display: block;
    height: 2px;
    width: 25px;
    background-color: #fff;
  }

  @media screen and (max-width: 745px) {
    display: ${({ menuState }) => (menuState ? 'none' : 'flex')};
    flex-direction: column;
    gap: 7px;
    margin-top: -41px;
  }
`;
