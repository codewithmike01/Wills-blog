import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import BlogImage from '../../assets/blogImg.jpg';

function index() {
  const [cookie] = useCookies(['user']);
  const navigate = useNavigate();
  return (
    <Container className="flex column">
      <div className="comment-count opacity"> 1 Comment </div>
      <div className="comments">
        <div className="comment flex">
          <div className="image-container">
            <img src={BlogImage} alt="comment user" />
          </div>
          <div className="comment-info">
            <div className="flex user-name">
              <p>Sarah Sereno</p>
              <span className="opacity">December 12, 2019 At 8:19 am</span>
            </div>
            <p className="opacity">What an amazing theme!</p>
          </div>
        </div>
      </div>

      <hr className="line" />

      {cookie.user && (
        <form className="flex column">
          <p className="opacity">Leave a reply </p>
          <textarea className="text-comment" placeholder="Comment:" />

          <button type="submit">Post Comment</button>
        </form>
      )}

      {!cookie.user && (
        <div>
          <button type="button" onClick={() => navigate('/Login')}>
            {' '}
            Login to comment
          </button>
        </div>
      )}
    </Container>
  );
}

export default index;

const Container = styled.div`
  gap:2rem;

  .comment-count{
    font-size:1.5rem;
  }
  .comments{

    .comment{
      gap:1rem;
      align-items:center;

      .image-container{
        width: 100px;
        height: 100px;
        border-radius:5px;
      
        img{
          width:100%;
          height: 100%
          object-fit:cover;
        }
      }
      
        .comment-info {
          align-items:center;
          p{
            font-size:0.92rem;
          }
          .user-name{
            margin-bottom:-20px;
            align-items:center;
            gap:20px;

            span{
              font-size:0.8rem;
            }
          }
          
        }
    }
  }

  form{
    gap:20px;

    p{
      font-size:1.3rem;
    }
    .text-comment{
      border: 1px solid #666;
      padding: 10px 5px 10px 10px ;
      width : 100%;
      height: 200px;
      background-color:transparent;
      color:#fff;

      &:focus{
      outline:none;
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
