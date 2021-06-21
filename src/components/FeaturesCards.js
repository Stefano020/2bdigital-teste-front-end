import React from 'react';
import IpadIcon from '../icons/ipad-icon.png';
import LayerIcon from '../icons/layer-icon.png';
import FileIcon from '../icons/file-icon.png';
import HtmlIcon from '../icons/html-icon.png';
import EmailIcon from '../icons/email-icon.png';
import DownloadIcon from '../icons/download-icon.png';

export default function FeaturesCards() {
  return (
    <div>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ IpadIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>Fully Responsive</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ LayerIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>Fully Layered PSD</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ FileIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>Font Awesome Icons</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ HtmlIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>HTML3 & CSS3</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ EmailIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>Email Template</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
      <section className="features-cards-container">
        <div className="features-cards-img">
          <img src={ DownloadIcon } alt="Tablet icon" />
        </div>
        <div className="features-cards-content">
          <h2>Free to download</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.
          </p>
        </div>
      </section>
    </div>
  )
}
