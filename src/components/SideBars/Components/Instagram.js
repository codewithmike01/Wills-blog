import React from 'react';
import styled from 'styled-components';
import BlogImage from '../../../assets/blogImg.jpg';

function Instagram() {
  return (
    <Container>
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
    </Container>
  );
}

export default Instagram;

const Container = styled.div`
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

      &:hover {
        filter: brightness(150%);
      }

      p {
        margin-top: 5px;
      }

      a {
        color: #888;
        text-decoration: none;
      }
    }
  }
`;
