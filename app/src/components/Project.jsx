import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import ember from '../assets/ember.jpg';
import sevak from '../assets/sevak.jpg';
import stoccoin from '../assets/stoccoin.jpg';
export default function Project ()  {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextClick = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handleBackClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(images.length - 1);
    }
  };

  const images = [
    {
      src: ember,
      alt: 'Mountains',
    },
    {
      src: sevak,
      alt: 'Forest',
    },
    {
      src: stoccoin,
      alt: 'Ocean',
    },
  ];

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              transform: `translateX(-${imageIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
        onClick={handleNextClick}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

