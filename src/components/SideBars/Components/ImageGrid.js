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

const Container = styled.div`
  .grid-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .grid-img {
      width: 100%;
      height: 120px;
      cursor: pointer;
      border: 0 solid transparent;
      transition: border 0.7s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        border: 1px solid #888;
      }
    }
  }
`;
