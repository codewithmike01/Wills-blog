import React from 'react';
import { useParams } from 'react-router-dom';
import { ImShare2 } from 'react-icons/im';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLike } from 'react-icons/ai';
import { entertainmentPosts } from '../Home/UtilsComponents/CommonTrend';
import Sidebar from './Common/Sidebar';
import generalPosts from './Common/commonData';
import HeaderNav from '../Header/HeaderNav';
import TrendX from '../Home/UtilsComponents/TrendX';
import Comment from '../Comment';
import BlogImage from '../../assets/blogImg.jpg';
import GeneralPostContainer from './poststyles';

function GeneralPosts() {
  const { genre, id } = useParams();

  function postHandler(el) {
    let postValue = '';
    if (el.id === parseFloat(id)) {
      postValue = (
        <div key={el.id} className="post-contianer">
          <h1>{el.title}</h1>
          <ul className="genre flex">
            <li className="list">Featured </li>
            <li className="list">{genre}</li>
            <li className="opacity">Auguest 29, 2019</li>
          </ul>

          <div className="image-post">
            <img src={el.image} alt="post gallary" />
          </div>

          <div className="post-socials flex">
            <button type="button" className="share">
              <ImShare2 />
              <p>Share</p>
            </button>
            <button type="button" className="socials facebook">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Facebook</p>
              </div>
            </button>
            <button type="button" className="socials twitter">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Twitter</p>
              </div>
            </button>
            <button type="button" className="socials pintress">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Pintress</p>
              </div>
            </button>
            <button type="button" className="socials whatsapp">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>WhatsApp</p>
              </div>
            </button>
          </div>

          <div className="post-content">
            <p>{el.content}</p>
          </div>

          <div className="user-post flex">
            <div className="user-image-container">
              <img src={el.image} alt="post gallary" />
            </div>

            <div className="user-info">
              <h3>Sarah Sereno</h3>
              <p className="opacity">
                In metus urna, porta sed ex at, tincidunt rhoncus ipsum. Proin
                quis libero sagittis, ornare leo id, commodo leo. In quis ligula
                purus. Mauris condimentum laoreet laoreet. Phasellus ut feugiat
                sapien.
              </p>
              <ul className="flex">
                <li>
                  {' '}
                  <FaFacebookF className="social-icon" />
                </li>
                <li>
                  <AiOutlineMail />
                </li>
                <li>
                  <FaInstagram className="social-icon" />
                </li>
                <li>
                  <FaTwitter className="social-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return postValue;
  }

  const post = generalPosts.map((el) => postHandler(el));

  return (
    <>
      <HeaderNav />

      <GeneralPostContainer className="flex column">
        <div className="flex main-post">
          <div>{post}</div>
          <Sidebar />
        </div>

        <div className="related-post">
          <TrendX
            trend={entertainmentPosts}
            icon={<AiOutlineLike />}
            genre="Related article"
          />
        </div>
        <div className="section-comment">
          <Comment />
          <div className="image-containaer">
            <img src={BlogImage} alt="comments" />
            <h3>
              Slow Down
              <span>The Noise</span>
            </h3>
          </div>
        </div>
      </GeneralPostContainer>
    </>
  );
}

export default GeneralPosts;
