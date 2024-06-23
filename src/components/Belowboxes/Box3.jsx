import React from 'react';
import Images0 from './../../../src/assets/Images0.png';
import box3img1 from './../../../src/assets/box3img1.png';
import Imagess0 from './../../../src/assets/Images0.png';

const RoomInspiration = () => {
  return (
    <div className="bg-white-200 mt-16 px-10 " style={{ background: 'rgba(252, 248, 243, 1)' }}>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">

          <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 pl-5">
            <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600 mb-6">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="bg-[#B88E2F] text-white px-8 py-3  hover:bg-yellow-500 transition duration-300">
              Explore More
            </button>
          </div>

          <div className="md:w-2/3 relative ">
            <div className="flex overflow-hidden gap-5">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={Images0}
                  alt="Image 1"
                  className="w-full   shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={box3img1}
                  alt="Image 2"
                  className="w-full  shadow-lg"
                />

              </div>
              <div className="flex-shrink-0 w-full md:w-1/4">
                <img
                  src={Imagess0}
                  alt="Image 3"
                  className="w-full  rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;