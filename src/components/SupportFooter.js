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
          <a href="#header">Examples</a>
          <a href="#header">Shop</a>
          <a href="#header">License</a>
        </section>
        <section>
          <a href="#header">Contact</a>
          <a href="#header">About</a>
          <a href="#header">Privacy</a>
          <a href="#header">Term</a>
        </section>
        <section>
          <a href="#header">Download</a>
          <a href="#header">Support</a>
          <a href="#header">Documents</a>
        </section>
        <section>
          <a href="#header">Media</a>
          <a href="#header">Blog</a>
          <a href="#header">Forums</a>
        </section>
      </div>
    </div>
  )
}

