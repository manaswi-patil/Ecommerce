import React from 'react';
import Breadcrumb from './Breadcrumb';
import FilterBar from './FilterBar';
import Shopimgbg from './../../src/assets/Rectangle 1.png';
import Qualitybar from './Belowboxes/Qualitybar';
import Box6 from './Belowboxes/Box6';
import Footer from './Belowboxes/Footer';

const Shop = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={Shopimgbg} className="w-full h-128 object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
        <span className="text-4xl font-bold bottom-10">Shop</span>
        <Breadcrumb />

        <div className="w-full">
          <FilterBar />
        </div>

      </div>

      <div className='mt-40'>
        <Box6 />
      </div>
      <Qualitybar />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;