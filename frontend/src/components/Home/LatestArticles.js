/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */

import { FaBookReader, FaChevronDown } from 'react-icons/fa';
import { LastestArticleContainer } from './home.styles';

function LatestArticles({ latestTrend }) {
  const latest = latestTrend.map(({ id, title, genre, date, image }) => (
    <div className="card" key={id}>
      <div className="img-container">
        <img src={image} alt="latest post" />
      </div>
      <div className="card-text">
        <h3>{title}</h3>

        <div className="content-date-year flex">
          <span className="content-genre">{genre}</span>
          <span className="opacity">{date}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <LastestArticleContainer className="flex column">
      <div className="heading flex opacity">
        <FaBookReader />
        <h2>Latest articles</h2>
      </div>

      <div className="latest-sidebar">
        <div className="latest-post">{latest}</div>
      </div>

      <div className="load-container">
        <div className="load-more flex opacity">
          <p>Load more</p>
          <div>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </LastestArticleContainer>
  );
}

export default LatestArticles;
