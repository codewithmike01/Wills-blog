import React from 'react';
import NewsLetterContainer from './newsletter.style';

function NewLetter() {
  return (
    <NewsLetterContainer>
      <h2 className="opacity">Newsletter</h2>

      <div className="sub-container flex column">
        <p className="notice-sub">
          Subscribe to get the latest news, offers and special announcements.
        </p>

        <div className="form-main-container">
          <form className="flex column">
            <input type="text" placeholder="Your email address" />
            <button type="submit"> Subscribe </button>
          </form>
          <p className="opacity">
            By subscribing, you are accepting to receive promotions.
          </p>
        </div>
      </div>
    </NewsLetterContainer>
  );
}

export default NewLetter;
