import React from 'react';
import { useParams } from 'react-router-dom';
import { MdMenuBook } from 'react-icons/md';
import HeaderNav from '../Header/HeaderNav';
import BlogImage from '../../assets/blogImg.jpg';
import Sidebar from './Common/Sidebar';
import Trend from '../Home/UtilsComponents/Trend';
import { lifePosts } from '../Home/UtilsComponents/CommonTrend';
import { CategoryContainer } from './poststyles';

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
      <CategoryContainer>
        <div className="main">
          <div className="left-side">
            <h1>{genre}</h1>
            <div className="all-genre flex">{setGenre}</div>
            <div>
              <div className="image-container">
                <img src={BlogImage} alt="post" />
                <h2>
                  Drew Banga wants to spark the bay Area&apos;s rep resurgence
                </h2>
                <p className="opacity">November 29, 2019</p>
              </div>
            </div>
            <div className="trend">
              <Trend trend={lifePosts} icon={<MdMenuBook />} genre={genre} />
            </div>
          </div>

          <Sidebar />
        </div>
      </CategoryContainer>
    </>
  );
}

export default CategoryPost;
