import styled from '@emotion/styled';
import React from 'react';
import banner from '../../assets/banner.jpg';

function index() {
  return (
    <Container>
      <div className="image-container">
        <img src={banner} alt="banner" />
      </div>
    </Container>
  );
}

export default index;

const Container = styled.div`
  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: -1;
    img {
      opacity: 0.75;
      width: 100%;
      height: 100%;
      object-fit: covered;
    }
  }
`;
