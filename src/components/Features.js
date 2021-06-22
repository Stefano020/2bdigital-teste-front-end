import React from 'react';
import FeatureCards from './FeaturesCards';

export default function Features() {
  return (
    <div className="features-background">
      <header className="features-header">
        <h1 className="features-header-title">Tinyone features</h1>
        <h3 className="features-header-subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
        </h3>
      </header>
      <main>
        <FeatureCards />
      </main>
    </div>
  )
}
