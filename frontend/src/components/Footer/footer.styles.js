import styled from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .main-footer {
    gap: 2rem;
    width: 95%;
    margin: 0 auto;

    .social-footer {
      width: 70%;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      li {
        list-style: none;
        cursor: pointer;

        &:hover {
          span {
            border: 1px solid #fcb900;
          }
        }

        span {
          border: 1px solid #ffa301;
          padding: 8px 10px 3px 10px;
        }

        a {
          color: #f79e01;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
      }
      & li:nth-child(3) {
        svg {
          transform: rotate(45deg);
        }
      }
    }

    .footer-highlights {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem;
    }

    .copy-right-links {
      margin-top: 5rem;
      align-items: center;
      font-size: 0.8rem;
      p {
        word-spacing: 8px;
      }
      nav {
        gap: 1rem;

        .foot-links {
          text-decoration: none;
          color: #fff;

          &:hover {
            color: #ffa301;
          }
        }
      }
    }
  }

  @media screen and (max-width: 473px) {
    .main-footer {
      .footer-highlights {
        gap: 2rem;
        grid-template-columns: 1fr;
      }

      .copy-right-links {
        flex-direction: column;
        align-items: flex-start;
      }

      .social-footer {
        li {
          span {
            font-size: 0.8rem;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 695px) {
    .main-footer {
      .social-footer {
        width: 90%;
      }

      .copy-right-links {
        font-size: 0.7rem;
      }
    }
  }
`;

export default FooterContainer;
