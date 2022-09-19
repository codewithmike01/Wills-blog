import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import BannerContainer from '../Banner.js/banner.style';
import BlogImage from '../../assets/blogImg.jpg';

function index() {
  const [cookie] = useCookies(['user']);
  const navigate = useNavigate();
  return (
    <BannerContainer className="flex column">
      <div className="comment-count opacity"> 1 Comment </div>
      <div className="comments">
        <div className="comment flex">
          <div className="image-container">
            <img src={BlogImage} alt="comment user" />
          </div>
          <div className="comment-info">
            <div className="flex user-name">
              <p>Sarah Sereno</p>
              <span className="opacity">December 12, 2019 At 8:19 am</span>
            </div>
            <p className="opacity">What an amazing theme!</p>
          </div>
        </div>
      </div>

      <hr className="line" />

      {cookie.user && (
        <form className="flex column">
          <p className="opacity">Leave a reply </p>
          <textarea className="text-comment" placeholder="Comment:" />

          <button type="submit">Post Comment</button>
        </form>
      )}

      {!cookie.user && (
        <div>
          <button type="button" onClick={() => navigate('/Login')}>
            {' '}
            Login to comment
          </button>
        </div>
      )}
    </BannerContainer>
  );
}

export default index;
