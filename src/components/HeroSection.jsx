import React, { useState } from 'react';

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
    <div className="relative w-full h-screen flex overflow-hidden">
      <div
        className="w-3/5 h-full bg-cover bg-center transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          clipPath: 'polygon(0 0, 0% 100%, 100% 100%, 82% 0)', 
        }}
      ></div>
      <div className="w-2/5 h-full flex flex-col justify-center bg-white text-black px-10 ml-40">
        <h1 className="text-5xl font-bold mb-4">CDC 2025</h1>
        <p className="text-xl mb-4">
          64th IEEE Conference on Decision and Control <br />
          December 10-12, 2025
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg text-white">Download Call for Papers</button>
          <button className="ml-4 px-6 py-3 rounded-lg border-2 border-black text-lg">Contact Us</button>
        </div>
      </div>


      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button onClick={prevImage} className="rounded-full bg-white p-2 shadow-lg">
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[calc(50%-20px)]"> 
        <button onClick={nextImage} className="rounded-full bg-white p-2 shadow-lg">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
