/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */

import { TrendXContainer } from './utils.styles';

function TrendX({ trend, icon, genre }) {
  const previewPost = trend.map(({ id, title, image, date }) => (
    <div className="post-card" key={id}>
      <div className="img-container">
        <img src={image} alt="post" />
      </div>

      <div className="post-details">
        <h3>{title}</h3>
        <div className="post-genre-date flex">
          <span className="post-genre">{genre}</span>
          <p className="opacity">{date}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <TrendXContainer className="flex column ">
      <div className="heading flex opacity">
        {icon}
        <h2>{genre}</h2>
      </div>
      <div className="posts">{previewPost}</div>
    </TrendXContainer>
  );
}

export default TrendX;
