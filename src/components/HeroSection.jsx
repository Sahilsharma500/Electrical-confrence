import React, { useState } from 'react';
import '../styling/HeroSection.css';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      <div className="left-container">
        <button className="arrow-left" onClick={handlePrev}>
          &#9664;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <button className="arrow-right" onClick={handleNext}>
          &#9654;
        </button>
      </div>
      <div className="right-container">
        <div className="logo">
        <img
            src="https://confcats-siteplex.s3.us-east-1.amazonaws.com/cdc25/large_Logo_CDC_2025_3e6db1dc79.png"
            alt="CDC 2025 Logo"
            className="logo-image"
            height={150}
            width={300}
          />
        </div>
        <p className='date'>December 10 - 12, 2025</p>
        <p className='location'>National institute of technology, Hamirpur</p>
        <h1 className='head'>CDC 2025</h1>
        <h3 className='sub-head'>64th IEEE Conference on Decision and Control</h3>
        <p className='descriptive-text'>The CDC is recognized as the premier scientific and engineering conference dedicated to the advancement of the theory and practice of systems and control. The CDC annually brings together an international community of researchers and practitioners in the field of control systems to discuss new research results, perspectives on future developments, and innovative applications relevant to decision-making, systems, automatic control, optimization, and related areas.</p>
      </div>

      </div>
  );
};

export default HeroSection;
