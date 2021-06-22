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
          <h4 className="header-menu-h4">Features</h4>
          <h4 className="header-menu-h4">Support</h4>
          <h4 className="header-menu-h4">Blog</h4>
        </section>
      </header>
      <main>
        <section>
          <article className="blog-article-container">
            <h2 className="blog-article-title">Inspire your inspiration</h2>
            <h5 className="blog-article-subtitle">Simple to use for your app, products showcase and your inspiration</h5>
            <p className= "blog-article-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesent vitae eros eget tellus tristique bibendum.
              Donec rutrum sed sem quis venenatis. Proin viverra risus
              a eros volupat tempor. In quis arcu et eros porta lobortis sit
            </p>
            <section className="blog-article-icons--container">
              <img className="blog-article-icons--img" src={ AppleBlackIcon } alt="Apple icon" />
              <img className="blog-article-icons--img" src={ AndroidBlackIcon } alt="Android icon" />
              <img className="blog-article-icons--img" src={ WindowsBlackIcon } alt="Windows icon" />
            </section>
          </article>
          <section className="blog-tablet-container">
            <img
              src={ TabletPhoto }
              alt="Tablet with app logo and name"
              className="blog-tablet-img"
            />
          </section>
          <section className="blog-carousel-container" >
            <span className="blog-carousel-dot" />
            <span className="blog-carousel-dot" />
            <span className="blog-carousel-dot" />
          </section>
        </section>
      </main>
    </div>
  )
}
