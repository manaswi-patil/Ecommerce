import React, { useState } from 'react';
import sofa2 from './../../../src/assets/sofa2.png';
const Cartpage2 = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container w-full mx-auto">
      <div className="flex mt-5 justify-center mt-10">
        <TabButton activeTab={activeTab} onClick={() => handleTabClick('Description')}>
          Description
        </TabButton>
        <TabButton activeTab={activeTab} onClick={() => handleTabClick('Additional Information')}>
          Additional Information
        </TabButton>
        <TabButton activeTab={activeTab} onClick={() => handleTabClick('Reviews')}>
          Reviews [5]
        </TabButton>
      </div>

      <div className="mt-6 px-8  pl-60 pr-60">
        <p className="text-gray-600 mb-4">
          Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-600">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
          and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
          to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <ProductImage />
        <ProductImage />
      </div>
    </div>
  );
};
const TabButton = ({ activeTab, onClick, children }) => {
  const isActive = activeTab === children;
  return (
    <button
      className={`px-4 py-2 ${isActive ? 'text-black' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const ProductImage = () => {
  return (
    <div style={{ height: 500, width: '550px' }} className="flex-shrink-0">
      <img src={sofa2} alt="Sofa side view" className="w-full bg-orange-50 rounded" />
    </div>
  );
};

export default Cartpage2;
