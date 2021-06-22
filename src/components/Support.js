import React, { useState } from 'react';
import FacebookIcon from '../icons/facebook-icon.png';
import TwitterIcon from '../icons/twitter-icon.png';
import GoogleIcon from '../icons/google-icon.png';
import PinterestIcon from '../icons/pinterest-icon.png';
import SupportFooter from './SupportFooter';

export default function Support() {
  const [email, setEmail] = useState('lalala');
  
  const handleOnClick = () => {
    setEmail('');
  }

  const emailValidation = (email) => {
    const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
    return isEmailValid;
  }
  
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
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
          <button
            className="submit-button"
            type="button"
            onClick={ (e) => {
              e.preventDefault();
              handleOnClick();
            } }
            disabled={ !emailValidation(email) }
          >
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
