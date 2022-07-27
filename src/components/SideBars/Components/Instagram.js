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

  @media screen and (max-width: 994px) {
    .instagram-follow {
      .right-insta {
        align-items: center;
        .instagram-img-container {
          img {
            width: 120px;
            height: 120px;
          }
        }

        .instagram-name {
          & p:nth-child(2) {
            font-size: 0.9rem;
          }
          p {
            font-size: 20px;
          }
        }
      }

      .button-conatainer-follow {
        height: 40px;
        width: 120px;

        p {
          margin-top: 9.7px;
          font-size: 1.2rem;
          padding-left: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 437px) {
    .instagram-follow {
      .right-insta {
        align-items: center;
        .instagram-img-container {
          img {
       
            width: 70px;
            height: 70px;
          }
        }
        .instagram-name {
          
          p {
            font-size: 15px;
          }
          
          & p:nth-child(2) {
            font-size: 0.8rem;
          }
        }
      }
      .button-conatainer-follow {
        height: 30px;
        width: 100px;
  
        p {
          margin-top: 8px;
          font-size: 1rem;
          padding-left: 15px;
        }
      }
    }

  }
  }
`;
