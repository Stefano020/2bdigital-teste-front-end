import React from 'react';
import IpadIcon from '../icons/ipad-icon.png';
import LayerIcon from '../icons/layer-icon.png';
import FileIcon from '../icons/file-icon.png';
import HtmlIcon from '../icons/html-icon.png';
import EmailIcon from '../icons/email-icon.png';
import DownloadIcon from '../icons/download-icon.png';

export default function FeaturesCards() {
  return (
    <ul className="features-cards-container">
      <li className="features-cards-card">
      <div className="features-cards-img-container">
        <div className="features-cards-img">
          <img className="features-cards-img--img" src={ IpadIcon } alt="Tablet icon" />
        </div>
      </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            Fully Responsive
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
      <li className="features-cards-card">
        <div className="features-cards-img-container">
          <div className="features-cards-img">
            <img className="features-cards-img--img" src={ LayerIcon } alt="Tablet icon" />
          </div>
        </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            Fully Layered PSD
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
      <li className="features-cards-card">
      <div className="features-cards-img-container">
        <div className="features-cards-img">
          <img className="features-cards-img--img" src={ FileIcon } alt="Tablet icon" />
        </div>
      </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            Font Awesome Icons
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
      <li className="features-cards-card">
        <div className="features-cards-img-container">
          <div className="features-cards-img">
            <img className="features-cards-img--img" src={ HtmlIcon } alt="Tablet icon" />
          </div>
        </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            HTML3 & CSS3
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
      <li className="features-cards-card">
        <div className="features-cards-img-container">
          <div className="features-cards-img">
            <img className="features-cards-img--img" src={ EmailIcon } alt="Tablet icon" />
          </div>
        </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            Email Template
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
      <li className="features-cards-card">
        <div className="features-cards-img-container">
          <div className="features-cards-img">
            <img className="features-cards-img--img" src={ DownloadIcon } alt="Tablet icon" />
          </div>
        </div>
        <div className="features-cards-content">
          <h2 className="features-cards-content-title">
            Free to download
          </h2>
          <p className="features-cards-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </li>
    </ul>
  )
}
