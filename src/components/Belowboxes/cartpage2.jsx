import React, { useState } from 'react';
import sofa1 from './../../../src/assets/sofa1.png';
import sofa2 from './../../../src/assets/sofa2.png';
const Cartpage2 = () => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex  justify-center">
        <button
          className={`px-4 py-2 ${activeTab === 'Description' ? ' text-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Additional Information' ? ' text-black ' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Additional Information')}
        >
          Additional Information
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Reviews' ? ' text-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Reviews')}
        >
          Reviews [5]
        </button>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-600">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
          and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
          to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <div className="" style={{ height: 500, width: 500 }}>
          <img src={sofa2}alt="Sofa side view" className="w-full bg-orange-50  rounded" />
        </div>
        <div className="" style={{ height: 500, width: 500 }}>
          <img src={sofa2}alt="Sofa side view" className="w-full bg-orange-50 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Cartpage2;