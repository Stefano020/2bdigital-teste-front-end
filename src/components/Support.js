import React from 'react'
import FacebookIcon from '../icons/facebook-icon.png';
import TwitterIcon from '../icons/twitter-icon.png';
import GoogleIcon from '../icons/google-icon.png';
import PinterestIcon from '../icons/pinterest-icon.png';
import SupportFooter from './SupportFooter';

export default function Support() {
  return (
    <div className="support-background">
      <header className="support-header-container">
        <h1 className="support-header-title">Keep in touch with us</h1>
        <h3 className="support-header-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus facilis eum quos aliquid commodi consequatur
          quae, saepe iure quia labore ipsum dolore.
        </h3>
      </header>
      <main>
        <section className="input-container">
          <input
            className="email-input"
            type="text"
            name="email-input"
            id="email-input"
            placeholder="Enter your email to update"
          />
          <button className="submit-button" type="button">
            Submit
          </button>
        </section>
        <section className="support-icons-container">
          <img className="support-icons-img" src={ FacebookIcon } alt="Facebook icon" />
          <img className="support-icons-img" src={ TwitterIcon } alt="Twitter icon" />
          <img className="support-icons-img" src={ GoogleIcon } alt="Google icon" />
          <img className="support-icons-img" src={ PinterestIcon } alt="Pinterest icon" />
        </section>
      </main>
      <footer>
        <SupportFooter />
      </footer>
    </div>
  ) 
}
