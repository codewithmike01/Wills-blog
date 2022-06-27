import React from 'react';
import styled from 'styled-components';
import BlogImage from '../../assets/blogImg.jpg';
import ImageGrid from './Components/ImageGrid';

function LatestPostSide() {
  return (
    <Container className="flex column ">
      <div className="img-container">
        <img src={BlogImage} alt="post" />
        <h3>
          Good days
          <span>Have</span>
          <span>arrived</span>
        </h3>
      </div>
      <div className="instagram-follow flex j-between ">
        <div className="right-insta flex j-between">
          <div className="instagram-img-container">
            <img src={BlogImage} alt="post" />
          </div>
          <div className="instagram-name">
            <p>@Username</p>
            <p className="opacity">3687 Followers</p>
          </div>
        </div>
        <div className="button-conatainer-follow">
          <p className="opacity">
            {' '}
            <a href="unknow" target="_balnk">
              Follow
            </a>
          </p>
        </div>
      </div>
      <ImageGrid />
      <div className="popular-posts">
        <h2 className="opacity">Popular categories</h2>

        <ul className="popular-posts-list">
          <li>
            <p>Tech</p>
            <p>6</p>
          </li>
          <li>
            <p>Entertainment</p>
            <p>6</p>
          </li>
          <li>
            <p>Finiace</p>
            <p>6</p>
          </li>
          <li>
            <p>Life</p>
            <p>6</p>
          </li>
          <li>
            <p>Music</p>
            <p>6</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default LatestPostSide;

const Container = styled.div`
  gap: 2rem;
  padding-top: 2rem;
  position: relative;
  .img-container {
    position: relative;
    width: 100%;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s ease-in-out;
    }

    h3 {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 2.2rem;
      span {
        display: block;
        margin-top: -23px;
      }
    }
  }

  .instagram-follow {
    align-items: center;
    margin-top: 2rem;

    .right-insta {
      gap: 20px;
      align-items: center;
      .instagram-img-container {
        width: 30%;

        img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .instagram-name {
        & p:nth-child(2) {
          margin-top: -12px;
          font-size: 0.7rem;
        }
        p {
          font-size: 15px;
        }
      }
    }

    .button-conatainer-follow {
      border: 1px solid #444444;
      height: 30px;
      width: 80px;
      padding-left: 15px;
      font-size: 0.8rem;
      cursor: pointer;
      p {
        margin-top: 5px;
      }

      a {
        color: #888;
        text-decoration: none;
      }
    }
  }

  .grid-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .grid-img {
      width: 100%;
      height: 120px;
      cursor: pointer;
      border: 0 solid transparent;
      transition: border 0.7s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        border: 1px solid #888;
      }
    }
  }

  .popular-posts {
    h2 {
      font-size: 1.5rem;
    }

    .popular-posts-list {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
