import React from 'react';
import styled from 'styled-components';
import BlogImage from '../../../assets/blogImg.jpg';

function ImageGrid() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const imageGrid = count.map((el) => (
    <div className="grid-img" key={el}>
      <img src={BlogImage} alt="post" />
    </div>
  ));
  return (
    <Container>
      <div className="grid-image">{imageGrid}</div>
    </Container>
  );
}

export default ImageGrid;

const Container = styled.div``;
