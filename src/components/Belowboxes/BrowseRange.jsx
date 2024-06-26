import React, { useState } from 'react';
import homebox1img1 from '../../assets/homebox1img1.png';
import homebox1img2 from '../../assets/homebox1img2.png';
import homebox1img3 from '../../assets/homebox1img3.png';
const BrowseRange = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="container mx-auto px-4 py-12 h-1/2 overflow-hidden bg-white-400 pl-40 pr-40">
      <h1 className="text-3xl font-bold text-center mb-1">Browse The Range</h1>
      <p className="text-gray-500 text-center align-middle mb-5 py-0">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.
      </p>
      <div className="flex justify-between pt-7 gap-5">
        <div className="w-1/3 px-2">
          <div
            className={`${isCardOpen ? 'scale-105' : ''} cursor-pointer transition-transform duration-300 ease-in-out`}
            onClick={handleCardClick}
          >
            <img src={homebox1img2} className="w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out" />

            <h3 className="text-xl font-semibold mt-4 text-center pt-5">Dining</h3>
          </div>
        </div>
        <div className="w-1/3 px-2">
          <div
            className={`${isCardOpen ? 'scale-105' : ''} cursor-pointer transition-transform duration-300 ease-in-out`}
            onClick={handleCardClick}
          >
            <img
              src={homebox1img1}
              alt="Furniture 1"
              className="w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h3 className="text-xl font-semibold mt-4 text-center pt-5">Living</h3>
          </div>
        </div>
        <div className="w-1/3 px-2">
          <div className={`${isCardOpen ? 'scale-105' : ''} cursor-pointer transition-transform duration-300 ease-in-out`} onClick={handleCardClick}>
            <img src={homebox1img3} className="w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-xl font-semibold mt-4 text-center pt-5">Bedroom</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;