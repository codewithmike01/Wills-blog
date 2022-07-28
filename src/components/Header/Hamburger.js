/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';

function Hamburger() {
  return (
    <Container className="flex column">
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

  @media and screen (max-width: 776px) {
    display: flex;
  }
`;
