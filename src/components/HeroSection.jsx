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
    <div className="flex min-h-screen overflow-x-visible">

      <div
        className="flex-grow w-[80vw] bg-cover bg-center transition-opacity duration-500 ease-in-out overflow-x-visible"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          clipPath: 'polygon(0 0, 0% 100%, 100% 100%, 82% 0)',
        }}
      >
        <div className="flex justify-between items-center h-full px-4 my-auto">
          <button
            onClick={prevImage}
            className="rounded-3xl bg-white px-1 py-0  opacity-90 hover:opacity-100"
          >
            &lt;
          </button>
          
        </div>
      </div>
        <div className='flex  flex-col justify-center items-center h-full px-4 my-auto'>
        <button
            onClick={nextImage}
            className="rounded-3xl bg-white px-1 py-0  opacity-90 hover:opacity-100 mr-20"
            style={{ marginLeft: 'auto' }} 
          >
            &gt;
          </button>
        </div>

      <div className="flex flex-col justify-between w-[50vw] h-full bg-white text-black px-8 py-8 ml-10 mr-20">
        <div className="flex items-center mb-4">
          <img
            src="https://confcats-siteplex.s3.us-east-1.amazonaws.com/cdc25/large_Logo_CDC_2025_3e6db1dc79.png"
            alt="CDC 2025 Logo"
            className="ml-auto w-[90%] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-start items-start space-y-2">
          <div className="font-semibold border border-black rounded-lg px-4 py-1 text-[1.5vw]">
            DECEMBER 10–12, 2025
          </div>
          <div className="text-[1vw] font-semibold text-gray-500">
            National Institute of Technology, Hamirpur
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[2vw] font-bold">CDC 2025</p>
          <p className="text-[1.5vw] italic font-semibold mt-2">
            64<sup>th</sup> IEEE Conference on Decision and Control
          </p>
        </div>

        <div className="mt-4 text-justify text-[1.1vw] text-gray-600 leading-relaxed">
          The CDC is recognized as the premier scientific and engineering conference dedicated to
          the advancement of the theory and practice of systems and control. The CDC annually
          brings together an international community of researchers and practitioners in the field
          of control systems to discuss new research results, perspectives on future developments,
          and innovative applications relevant to decision-making, systems, automatic control,
          optimization, and related areas.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
