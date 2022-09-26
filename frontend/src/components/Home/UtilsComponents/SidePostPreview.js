/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */

import { SidePostContainer } from './utils.styles';

// import blogImage from '../../../assets/blogImg.jpg';

function SidePostPreview({ trendArr, title, icon }) {
  const financePost = trendArr.map(({ id, title, date, image }) => (
    <div key={id}>
      <div className="finance-post flex j-between">
        <div className="finance-post-left">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>

        <div className="finance-post-right">
          <img src={image} alt="post" />
        </div>
      </div>
    </div>
  ));
  return (
    <SidePostContainer className="flex column">
      <div className="finance flex opacity">
        {icon}

        <h3>{title}</h3>
      </div>

      {financePost}
    </SidePostContainer>
  );
}

export default SidePostPreview;
