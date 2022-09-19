import styled from 'styled-components';

const HomeContainer = styled.div`
  padding-top: 4rem;
  width: 95%;
  margin: 0 auto;
  gap: 6.5rem;

  .trend-finance,
  .life-post-genre,
  .tech-post-genre,
  .latest-aticles {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }

  .music-side-post {
    gap: 3rem;
  }

  @media screen and (max-width: 994px) {
    width: 90%;
    margin: 0 auto;
    .trend-finance,
    .life-post-genre,
    .tech-post-genre,
    .latest-aticles {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;

export const LastestArticleContainer = styled.div`
  gap: 2rem;
  .heading {
    align-items: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 11px;
    }

    svg {
      font-size: 2.7rem;
      margin-right: 30px;
    }
  }

  .latest-sidebar {
    height: 100%;
    width: 90%;
    .latest-post {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;

      .card {
        width: 100%;
        .img-container {
          width: 100%;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            transform: scale(1.05);
            transition: transform 0.5s ease-in-out;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .card-text {
          h3 {
            font-size: 1.3rem;
            cursor: pointer;

            &:hover {
              color: #ffa301;
            }
          }

          .content-date-year {
            font-size: 1rem;
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
        }
      }
    }
  }

  .load-container {
    margin-top: 50px;
    width: 50%;
    .load-more {
      width: 40%;
      padding: 0.8rem 1rem 0.6rem 2rem;
      margin: 0 auto;
      border: 1px solid gray;
      align-items: center;
      gap: 20px;

      p {
        margin: 0;
        font-size: 0.8rem;
      }

      div {
        margin-bottom: -10px;
      }

      &:hover {
        opacity: 1;
        cursor: pointer;
        color: #ffa301;
        border: 1px solid #ffa000;
      }
    }
  }

  @media screen and (max-width: 473px) {
    .load-container {
      .load-more {
        width: 100%;
        margin: 0;
        padding: 10px 0 10px 10px;
      }
    }
  }

  @media screen and (max-width: 473px) {
    .heading {
      h2 {
        font-size: 1.5rem;
      }

      svg {
        font-size: 2.5rem;
        margin-right: 30px;
      }
    }

    .latest-sidebar {
      .latest-post {
        .card {
          .card-text {
            h3 {
              font-size: 1rem;
            }

            .content-date-year {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    .load-container {
      .load-more {
        width: 75%;
      }
    }
  }

  @media screen and (max-width: 769px) {
    .latest-sidebar {
      width: 100%;
    }
    .load-container {
      width: 60%;
      padding: 0.8rem 0.5rem 0.6rem 1rem;
    }
  }

  @media screen and (max-width: 735px) {
    .latest-sidebar {
      width: 100%;
      .latest-post {
        grid-template-columns: 1fr;
      }
    }
    .load-container {
      width: 70%;
      padding: 0.8rem 0.5rem 0.6rem 1rem;
    }
  }
`;

export default HomeContainer;
