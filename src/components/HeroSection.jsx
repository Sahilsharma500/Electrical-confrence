import React, { useState } from 'react';
import '../styling/HeroSection.css'; 

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="image-navigation">
          <button onClick={prevImage} className="nav-button">
            &lt;
          </button>
        </div>
      </div>

      <div className='image-navigation'>
        <button onClick={nextImage} className="nav-button" style={{ marginLeft: 'auto' }}>
          &gt;
        </button>
      </div>

      <div className="text-container">
        <div className="logo-container">
          <img
            src="https://confcats-siteplex.s3.us-east-1.amazonaws.com/cdc25/large_Logo_CDC_2025_3e6db1dc79.png"
            alt="CDC 2025 Logo"
            className="logo-image"
          />
        </div>

        <div className="text-section">
          <div className="date-box">DECEMBER 10–12, 2025</div>
          <div className="location-text">National Institute of Technology, Hamirpur</div>
        </div>

        <div className="main-title">CDC 2025</div>
        <div className="sub-title">
          64<sup>th</sup> IEEE Conference on Decision and Control
        </div>

        <div className="description-text">
          The CDC is recognized as the premier scientific and engineering conference dedicated to
          the advancement of the theory and practice of systems and control. The CDC annually brings
          together an international community of researchers and practitioners in the field of
          control systems to discuss new research results, perspectives on future developments, and
          innovative applications relevant to decision-making, systems, automatic control,
          optimization, and related areas.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
