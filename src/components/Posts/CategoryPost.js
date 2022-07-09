import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HeaderNav from '../Header/HeaderNav';

function CategoryPost() {
  const { genre } = useParams();
  const allGenre = ['Music', 'Finace', ' Life', 'Politics'];
  const setGenre = allGenre.map((el) => (
    <>
      <span className="content-genre ">{el}</span>
    </>
  ));
  return (
    <>
      <HeaderNav />
      <Container>
        <h1>{genre}</h1>
        <div className="all-genre flex">{setGenre}</div>
      </Container>
    </>
  );
}

export default CategoryPost;
const Container = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  gap: 7rem;

  h1 {
    text-transform: capitalize;
  }

  .all-genre {
    font-size: 1rem;
    align-items: center;
    .content-genre {
      color: #000;
      background-color: #ffa000;
      padding: 0.2rem;
      padding-left: 0.7rem;
      padding-right: 1rem;
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        background-color: #ffae00;
      }
    }
  }
`;
