import styled from 'styled-components';

const NewsLetterContainer = styled.div`
  .sub-container {
    gap: 1rem;

    .notice-sub {
      font-size: 0.8rem;
    }

    .form-main-container {
      form {
        input {
          width: 100%;
          height: 40px;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #888;
          border-radius: 5px;
          background-color: transparent;
          color: #fff;

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          &:focus {
            outline: none;
          }
        }
        button {
          width: 100%;
          margin: 0 auto;
          margin-top: 1rem;
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
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export default NewsLetterContainer;
