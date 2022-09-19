import styled from 'styled-components';

const GeneralPostContainer = styled.div`
  margin-top: -200px;
  width: 95%;
  margin: 0 auto;
  gap: 7rem;

  .main-post {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 15rem;
    gap: 3rem;

    .post-contianer {
      h1 {
        font-size: 2rem;
      }

      .genre {
        align-items: center;
        li {
          list-style: none;
        }

        .list {
          color: #000;
          background-color: #ffa000;
          padding: 0.2rem;
          padding-left: 0.7rem;
          padding-right: 1rem;
          margin-right: 20px;
          cursor: pointer;

          &:hover {
            background-color: #ffae00;
          }
        }
      }
      .image-post {
        margin-top: 50px;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }

    .post-socials {
      flex-wrap: wrap;
      gap: 25px;
      margin-top: 20px;
      button {
        background-color: transparent;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 20px;
        align-items: center;
        list-style: none;
        cursor: pointer;

        &:hover,
        &:focus {
          filter: brightness(115%);
        }

        p {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }

      .facebook {
        color: #41598a;
      }

      .twitter {
        color: #187491;
      }

      .pintress {
        color: #a11b23;
      }

      .whatsapp {
        color: #5d9150;
      }

      .share,
      .socials {
        height: 40px;
        padding-left: 10px;
        padding-right: 20px;
      }

      .share {
        border: 1px solid #666;
      }

      .socials {
        border: 1px solid rgba(255, 163, 1, 0.8);

        div {
          gap: 15px;
          align-items: center;
          width: 100%;

          .icon-container {
            background-color: rgba(255, 163, 1, 0.8);
            height: 40px;
            width: 40px;
            margin-left: -10px;
            padding-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              color: #000;
            }
          }
        }
      }
    }

    .post-content {
      margin-top: 30px;

      p {
        line-height: 2em;
        text-align: justify;
        word-wrap: no-wrap;
      }
    }

    .user-post {
      gap: 20px;
      margin-top: 40px;
      align-items: center;
      .user-image-container {
        width: 150px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user-info {
        width: 100%;
        align-items: center;

        p {
          margin-top: -10px;
          font-size: 0.7rem;
        }
        ul {
          gap: 10px;
          align-items: center;
          font-size: 0.9rem;
          li {
            list-style: none;
            svg {
              color: #ffa301;
              cursor: pointer;

              &:hover {
                filter: brightness(115%);
              }
            }
          }
        }
      }
    }
  }

  .section-comment {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6.5rem;

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

  @media screen and (max-width: 994px) {
    .main-post {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    .section-comment {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 437px) {
    .main-post {
      .post-contianer {
        h1 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const CategoryContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  gap: 7rem;

  .main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    .left-side {
      h1 {
        text-transform: capitalize;
      }

      .all-genre {
        font-size: 0.8rem;
        align-items: center;
        .content-genre {
          color: #000;
          background-color: #ffa000;
          padding: 0.2rem;
          padding-left: 0.7rem;
          padding-right: 1rem;
          margin-right: 20px;
          cursor: pointer;

          &:hover {
            background-color: #ffae00;
          }
        }
      }

      .image-container {
        margin-top: 40px;
        width: 100%;
        height: 355px;

        h2 {
          font-size: 1.3rem;
        }

        h2:hover {
          cursor: pointer;
          color: #ffae00;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .trend {
        margin-top: 150px;
      }
    }
  }

  @media screen and (max-width: 994px) {
    .main {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  @media screen and (max-width: 473px) {
    .main {
      margin-top: 40px;
    }
    margin-top: 40px;
  }
`;

export default GeneralPostContainer;
