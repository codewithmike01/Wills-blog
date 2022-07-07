/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Trend({ trend, icon, genre }) {
  const navigate = useNavigate();
  const blogTrend = trend.map(
    ({ id, image, date, description, title, genre }) => (
      <div className="flex card" key={id}>
        <div className="img-container">
          <img src={image} alt="blog" />
        </div>

        <div className="content">
          <h2 type="button" onClick={() => navigate(`/${genre}/${id}`)}>
            {title}
          </h2>

          <div className="content-date-year flex">
            <span className="content-genre">{genre}</span>
            <span>{date}</span>
          </div>

          <p className="content-description opacity">{description}</p>
        </div>
      </div>
    )
  );
  return (
    <Container className="flex column">
      <div
        style={{ display: icon && genre ? 'flex' : 'none' }}
        className="heading opacity"
      >
        {icon}
        <h2>{genre}</h2>
      </div>
      {blogTrend}
    </Container>
  );
}

export default Trend;

const Container = styled.div`
  gap: 2rem;
  .heading {
    align-items: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 11px;
    }

    svg {
      font-size: 2.7rem;
      margin-right: 30px;
    }
  }
  .card {
    gap: 1.5rem;
    align-items: flex-start;
    .img-container {
      width: 30%;
      height: 100%;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        transition: transform 0.5s ease-in-out;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
    .content {
      width: 60%;
      h2 {
        margin-top: 0.8rem;
        font-size: 1.3rem;
        letter-spacing: 1.5px;
        word-wrap: wrap;
        cursor: pointer;

        &:hover {
          color: #ffa301;
        }
      }
      .content-date-year {
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
      p {
        font-size: 1.1rem;
      }
    }
  }
`;
