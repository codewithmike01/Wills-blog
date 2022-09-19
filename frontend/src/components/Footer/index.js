import React from 'react';

import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import Articles from './FooterComponent/PopularArticles';
import popularArticle, { featuredArticle } from './FooterComponent/CommonFile';
import NewLetter from './FooterComponent/NewLetter';
import FooterContainer from './footer.styles';

function index() {
  return (
    <FooterContainer>
      <div className="main-footer flex column">
        <ul className="social-footer flex j-between">
          <li>
            <a href="fs" target="_blank">
              <span>
                <FaFacebookF />
              </span>
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a href="fs" target="_blank">
              <span>
                <FaInstagram />
              </span>
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="fs" target="_blank">
              <span>
                <ImConnection />
              </span>
              <p>RSS</p>
            </a>
          </li>
          <li>
            <a href="fs" target="_blank">
              <span>
                <FaTwitter />
              </span>
              <p>Twiter</p>
            </a>
          </li>
        </ul>

        <div className="footer-highlights">
          <div className="popular-articles">
            <Articles article={popularArticle} name="Popular article" />
          </div>

          <div className="Featured">
            <Articles article={featuredArticle} name="Featured" />
          </div>

          <div className="Newsletter">
            <NewLetter />
          </div>
        </div>

        <div className="copy-right-links flex j-between">
          <p className="opacity">© Copyright - Newspaper Theme by KanuMike</p>
          <nav className="flex ">
            <Link to="none" className="foot-links">
              Home
            </Link>
            <Link to="none" className="foot-links">
              Tech
            </Link>
            <Link to="none" className="foot-links">
              Entertainment
            </Link>
            <Link to="none" className="foot-links">
              Finance
            </Link>
            <Link to="none" className="foot-links">
              Life
            </Link>
            <Link to="none" className="foot-links">
              Music
            </Link>
          </nav>
        </div>
      </div>
    </FooterContainer>
  );
}

export default index;
