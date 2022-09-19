/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrendContainer from './utils.styles';

function Trend({ trend, icon, genre, showGenre }) {
  const navigate = useNavigate();
  const blogTrend = trend.map(
    ({ id, image, date, description, title, genre }) => (
      <div className="flex card" key={id}>
        <div className="img-container">
          <img src={image} alt="blog" />
        </div>

        <div className="content">
          <h3 type="button" onClick={() => navigate(`/${genre}/${id}`)}>
            {title}
          </h3>

          <div className="content-date-year flex">
            <span
              className="content-genre"
              style={{ display: showGenre ? 'block' : 'none' }}
            >
              {genre}
            </span>
            <span className="opacity">{date}</span>
          </div>

          <p className="content-description opacity">{description}</p>
        </div>
      </div>
    )
  );
  return (
    <TrendContainer className="flex column">
      <div
        className="heading opacity"
        style={{ display: icon && genre ? 'flex' : 'none' }}
      >
        {icon}
        <h2>{genre}</h2>
      </div>
      <div className="post flex">{blogTrend}</div>
    </TrendContainer>
  );
}

export default Trend;
