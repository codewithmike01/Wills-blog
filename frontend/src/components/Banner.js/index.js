import React from 'react';
import banner from '../../assets/banner.jpg';
import BannerContainer from './banner.styled';

function index() {
  return (
    <BannerContainer>
      <div className="image-container">
        <img src={banner} alt="banner" />
      </div>
    </BannerContainer>
  );
}

export default index;
