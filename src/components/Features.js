import React from 'react';
import FeatureCards from './FeaturesCards';

export default function Features() {
  return (
    <div className="features-background">
      <section className="features-header">
        <h1>Tinyone features</h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
        </h3>
      </section>
      <section>
        <FeatureCards />
      </section>
    </div>
  )
}
