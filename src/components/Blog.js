import React from 'react';
import BlackAppLogo from '../icons/black-app-icon.png';
import AppleBlackIcon from '../icons/apple-icon.png';
import AndroidBlackIcon from '../icons/android-icon.png';
import WindowsBlackIcon from '../icons/windows-icon.png';
import TabletPhoto from '../icons/tablet-photo.png';

export default function Blog() {
  return (
    <div className="blog-background">
      <header className="header-container">
        <h1 className="header-logo">
          <img className="header-logo-img" src={ BlackAppLogo } alt="App Logo" />
          tinyone
        </h1>
        <section className="header-menu">
          <h4>Features</h4>
          <h4>Support</h4>
          <h4>Blog</h4>
        </section>
      </header>
      <main>
        <section>
          <article>
            <h2>Inspire your inspiration</h2>
            <h5>Simple to use for your app, products showcase and your inspiration</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesent vitae eros eget tellus tristique bibendum.
              Donec rutrum sed sem quis venenatis. Proin viverra risus
              a eros volupat tempor. In quis arcu et eros porta lobortis sit
            </p>
            <section>
              <img src={ AppleBlackIcon } alt="Apple icon" />
              <img src={ AndroidBlackIcon } alt="Android icon" />
              <img src={ WindowsBlackIcon } alt="Windows icon" />
            </section>
          </article>
          <section>
            <img src={ TabletPhoto } alt="Tablet with app logo and name" />
          </section>
          <section className="blog-carousel-container" >
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </section>
        </section>
      </main>
    </div>
  )
}
