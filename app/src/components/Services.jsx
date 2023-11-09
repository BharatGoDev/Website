import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
export default function Services() {

  const [imageIndex, setImageIndex] = useState(0);
  length=3;
  const handleNextClick = () => {
    if (imageIndex < length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handleBackClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(length - 1);
    }
  };

  return (
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="w-full h-full object-cover visible" style={{ transform: `translateX(-${imageIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
              <img src="/Stoccoin.jpeg" alt="Web Development" />
            </div>
            <div className="w-full h-full object-cover hidden" style={{ transform: `translateX(-${1 * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
              <img src="/Ember.jpeg" alt="App Development" />
            </div>
            <div className="w-full h-full object-cover hidden" style={{ transform: `translateX(-${2 * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
              <img src="/Sevak.jpeg" alt="Graphic Design" />
            </div>
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
            onClick={handleBackClick}
          >
            <BsChevronCompactLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
            onClick={handleNextClick}
          >
            <BsChevronCompactRight className="h-6 w-6" />
          </button>
        </div>
      );
      
}