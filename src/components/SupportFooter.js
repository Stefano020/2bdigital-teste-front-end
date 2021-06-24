import React from 'react';

export default function SupportFooter() {
  return (
    <div className="support-footer-container">
      <section className="support-footer-address">
        <p>HALOVIETNAM LTD </p>
        <p>66, Dang Van ngu, Dong Da Hanoi, Vietnam</p>
        <div className="anchors">
          <a href="mailto:contact@halovietnam.com">
            contact@halovietnam.com
          </a>
        </div>
        <div className="anchors">
          <a href="tel:+844 35149182">+844 35149182</a>
        </div>
      </section>
      <div className="support-footer-menu">
        <section>
          <a data-testid="examples-link" href="#header">Examples</a>
          <a data-testid="shop-link" href="#header">Shop</a>
          <a data-testid="license-link" href="#header">License</a>
        </section>
        <section>
          <a data-testid="contact-link" href="#header">Contact</a>
          <a data-testid="about-link" href="#header">About</a>
          <a data-testid="privacy-link" href="#header">Privacy</a>
          <a data-testid="terms-link" href="#header">Terms</a>
        </section>
        <section>
          <a data-testid="download-link" href="#header">Download</a>
          <a data-testid="support-link" href="#header">Support</a>
          <a data-testid="documents-link" href="#header">Documents</a>
        </section>
        <section>
          <a data-testid="media-link" href="#header">Media</a>
          <a data-testid="blog-link" href="#header">Blog</a>
          <a data-testid="forums-link" href="#header">Forums</a>
        </section>
      </div>
    </div>
  )
}

