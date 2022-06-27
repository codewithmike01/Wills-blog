import React from 'react';
import styled from 'styled-components';

function Archieve() {
  return (
    <Container className="flex column">
      <h3 className="opacity">Archieve</h3>
      <ul className="flex column">
        <li>
          <p>Novermber 2019</p>
        </li>

        <li>
          <p>October 2019</p>
        </li>

        <li>
          <p>Spetember 2019</p>
        </li>

        <li>
          <p>August 2019</p>
        </li>

        <li>
          <p>July 2019</p>
        </li>

        <li>
          <p>June 2019</p>
        </li>
      </ul>
    </Container>
  );
}

export default Archieve;
const Container = styled.div`
  width: 100%;
  h3 {
    font-size: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      cursor: pointer;

      &:hover {
        color: #ffa301;
      }
    }
  }
`;
