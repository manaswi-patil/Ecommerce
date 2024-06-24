import React from 'react';
import Quality from './../../../src/assets/quality.png';
import Warranty from './../../../src/assets/warranty.png';
import Free from './../../../src/assets/freeshopping.png';
import Alltime from './../../../src/assets/24.png';
const Qualitybar = () => {
  return (
    <div className=" bg-yellow-50 py-4 mt-10">
      <div className="container mx-auto  py-10 px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">

            <img src={Quality} className="w-10 h-10 mr-4" />


            <div>
              <h3 className="font-semibold text-lg">High Quality</h3>
              <p className="text-sm text-gray-400 text-2xl ">crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">

            <img src={Warranty} className="w-10 h-10 mr-4" />

            <div>
              <h3 className="font-semibold text-lg">Warranty Protection</h3>
              <p className="text-sm text-gray-400 text-2xl">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={Free} className="w-10 h-10 mr-4" />


            <div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-sm text-gray-400 text-2xl ">Order over 150 $</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={Alltime} className="w-10 h-10 mr-4" />

            <div>
              <h3 className="font-semibold text-lg">24 / 7 Support</h3>
              <p className="text-sm text-gray-400 text-2xl ">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Qualitybar;