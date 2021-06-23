import React from 'react';
import BlackAppLogo from '../icons/black-app-icon.png';
import AppleBlackIcon from '../icons/apple-icon.png';
import AndroidBlackIcon from '../icons/android-icon.png';
import WindowsBlackIcon from '../icons/windows-icon.png';
import TabletPhoto from '../icons/tablet-photo.png';

export default function Blog() {
  return (
    <div className="blog-background">
      <header id="header" className="header-container">
        <h1 className="header-logo">
          <img className="header-logo-img" src={ BlackAppLogo } alt="App Logo" />
          tinyone
        </h1>
        <section className="header-menu">
          <h4 className="header-menu-h4">
            <a href="#features">
                Features
            </a>
          </h4>
          <h4 className="header-menu-h4">
            <a href="#support">
              Support
            </a>
          </h4>
          <h4 className="header-menu-h4">
            <a href="#header">
              Blog
            </a>
          </h4>
        </section>
      </header>
      <main>
        <section className="article-tablet-container">
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
              <a href="https://apps.apple.com/us/app/apple-store/id375380948">
                <img className="blog-article-icons--img" src={ AppleBlackIcon } alt="Apple icon" />
              </a>
              <a href="https://play.google.com/store">
                <img className="blog-article-icons--img" src={ AndroidBlackIcon } alt="Android icon" />
              </a>
              <a href="https://www.microsoft.com/en-us/store/apps/windows">
                <img className="blog-article-icons--img" src={ WindowsBlackIcon } alt="Windows icon" />
              </a>
            </section>
          </article>
          <section className="blog-tablet-container">
            <img
              src={ TabletPhoto }
              alt="Tablet with app logo and name"
              className="blog-tablet-img"
            />
          </section>
        </section>
          <section className="blog-carousel-container" >
            <span className="blog-carousel-dot" />
            <span className="blog-carousel-dot" />
            <span className="blog-carousel-dot" />
          </section>
      </main>
    </div>
  )
}
