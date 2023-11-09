import { useState } from "react";

export default function Services() {
  const [imageIndex, setImageIndex] = useState(0);
  var length = 3;

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
    <div className="relative align-center justify-center bg-black pb-3">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        {" "}
        Our Services
      </h2>
      <div className="relative pt-5 pb-5 pr-30 pl-30 ">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-10 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
          onClick={handleBackClick}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-10 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 md:hidden"
          onClick={handleNextClick}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div
          className="w-full h-full object-cover visible"
          style={{
            transform: `translateX(-${imageIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            width: "50%",
            height: "50%",
          }}
        >
          <img src="./Stoccoin.jpeg" alt="Stoccoin" />
        </div>
        <div
          className="w-full h-full object-cover hidden"
          style={{
            transform: `translateX(-${1 * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <img src="./Ember.jpeg" alt="Ember" />
        </div>
        <div
          className="w-full h-full object-cover hidden"
          style={{
            transform: `translateX(-${2 * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <img src="./Sevak.jpeg" alt="Sevak" />
        </div>
      </div>
    </div>
  );
}