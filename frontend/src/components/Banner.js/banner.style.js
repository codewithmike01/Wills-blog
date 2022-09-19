import styled from 'styled-components';

const BannerContainer = styled.div`
  gap: 2rem;

  .comment-count {
    font-size: 1.5rem;
  }
  .comments {
    .comment {
      gap: 1rem;
      align-items: center;

      .image-container {
        width: 100px;
        height: 100px;
        border-radius: 5px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .comment-info {
        align-items: center;
        p {
          font-size: 0.92rem;
        }
        .user-name {
          margin-bottom: -20px;
          align-items: center;
          gap: 20px;

          span {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  form {
    gap: 20px;

    p {
      font-size: 1.3rem;
    }
    .text-comment {
      border: 1px solid #666;
      padding: 10px 5px 10px 10px;
      width: 100%;
      height: 200px;
      background-color: transparent;
      color: #fff;

      &:focus {
        outline: none;
      }
    }
  }

  button {
    width: 150px;
    border: none;
    color: #fff;
    background-color: #222;
    height: 40px;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      background-color: #ffa301;
    }
  }
`;

export default BannerContainer;
