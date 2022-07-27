import React from 'react';
import styled from 'styled-components';
import { FaBookReader } from 'react-icons/fa';
import { musicSide } from '../../Home/UtilsComponents/CommonTrend';
import Music from '../../Home/UtilsComponents/SidePostPreview';
import SearchForm from '../../SideBars/SearchForm';
import ImageGrid from '../../SideBars/Components/ImageGrid';
import Instagram from '../../SideBars/Components/Instagram';
import BlogImage from '../../../assets/blogImg.jpg';

function Sidebar() {
  return (
    <Container>
      <div className="right-post-side flex column">
        <SearchForm />
        <Music
          title="Latest article"
          genre="Music"
          icon={<FaBookReader />}
          trendArr={musicSide}
        />
        <div className="image-containaer">
          <img src={BlogImage} alt="comments" />
          <h3>
            Slow Down
            <span>The Noise</span>
          </h3>
        </div>
        <Instagram />
        <ImageGrid />
      </div>
    </Container>
  );
}

export default Sidebar;
const Container = styled.div`
  .right-post-side {
    gap: 2rem;
    margin-top: 90px;

    .image-containaer {
      position: relative;
      width: 100%;
      cursor: pointer;

      img {
        width: 100%;
        height: 350px;
        object-fit: cover;
      }

      h3 {
        font-size: 2.5rem;
        position: absolute;
        top: 12rem;
        left: 40px;

        span {
          display: block;
          margin-top: -20px;
        }
      }
    }
  }
`;
