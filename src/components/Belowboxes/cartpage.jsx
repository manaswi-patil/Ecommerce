
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image1 from './../../../src/assets/Asgaard sofa 3.png';
import image2 from './../../../src/assets/Asgaard sofa 3.png';
import image3 from './../../../src/assets/Asgaard sofa 3.png';
import image4 from './../../../src/assets/Asgaard sofa 3.png';
import image5 from './../../../src/assets/Asgaard sofa 3.png';
import Cartpage2 from './cartpage2';
import Cartpage3 from './../../components/Belowboxes/cartpage3';
const Cartpage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} Asgaard sofa(s) to the cart!`);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const [selectedColor, setSelectedColor] = useState('');

  // Function to handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto ">
          <nav className="text-gray-600">
            <ul className="flex space-x-2 bg-yellow-50  py-6 gap-4 pl-40 mt-20 ">
              <li>
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li>
                <svg className="fill-current w-3 h- mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
              </li>
              <li>
                <a href="#" className="hover:underline">Shop</a>
              </li>
              <li>
                <svg className="fill-current w-3 h- mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
              </li>
              <li>|</li>
              <li>Asgaard sofa</li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="flexbox  col-1 py-2 pl-40 pr-12 ">
                <img src={image2} alt="image1" className="w-1/3 m-2 bg-orange-50 rounded-lg shadow-lg" style={{ height: '100px', width: '100px' }} />
                <img src={image3} alt="image2" className="w-1/3 m-2 bg-orange-50 rounded-lg shadow-lg" style={{ height: '100px', width: '100px' }} />
                <img src={image4} alt="image3" className="w-1/3 m-2 bg-orange-50 rounded-lg shadow-lg" style={{ height: '100px', width: '100px' }} />
                <img src={image5} alt="image4" className="w-1/3 m-2 bg-orange-50 rounded-lg shadow-lg" style={{ height: '100px', width: '100px' }} />
              </div>
              <img src={image1} className="rounded-lg  bg-orange-50 shadow-lg mb-4  " style={{ height: 450, width: 450 }} />

            </div>
            <div className="w-full md:w-1/2 md:pl-10">
              <h1 className="text-4xl font-semibold mb-2">Asgaard sofa</h1>
              <p className="text-xl text-gray-800 mb-4">Rs. 250,000.00</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500  border-right-2 border-gray-300 pr-2">★★★★★</span>
                  <span className="text-gray-600  text-sm ml-2">5 Customer Review</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6 pr-12">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>


              <div className="flex items-start space-x-4 mb-6">
                <div>
                  <span className="text-gray-600">Size:</span>
                  <div className="mt-2">
                    <select className="border border-gray-300 rounded p-2">
                      <option>L</option>
                      <option>XL</option>
                      <option>XS</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-6">
                {/* <div>
                  <span className="text-gray-600">Color:</span>
                  <div className="mt-2">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-300"></button>
                      <button className="w-6 h-6 bg-yellow-600 rounded-full border-2 border-gray-300"></button>
                      <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
                      <button className="w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-300"></button>
                    </div>
                  </div>
                </div> */}

<div>
      <span className="text-gray-600">Color:</span>
      <div className="mt-2">
        <div className="flex space-x-2">
          <button
            className={`w-6 h-6 bg-blue-600 rounded-full border-2 ${selectedColor === 'blue' ? 'border-gray-800' : 'border-gray-300'}`}
            onClick={() => handleColorSelect('blue')}
          ></button>
          <button
            className={`w-6 h-6 bg-yellow-600 rounded-full border-2 ${selectedColor === 'yellow' ? 'border-gray-800' : 'border-gray-300'}`}
            onClick={() => handleColorSelect('yellow')}
          ></button>
          <button
            className={`w-6 h-6 bg-black rounded-full border-2 ${selectedColor === 'black' ? 'border-gray-800' : 'border-gray-300'}`}
            onClick={() => handleColorSelect('black')}
          ></button>
          <button
            className={`w-6 h-6 bg-gray-600 rounded-full border-2 ${selectedColor === 'gray' ? 'border-gray-800' : 'border-gray-300'}`}
            onClick={() => handleColorSelect('gray')}
          ></button>
        </div>
      </div>
      {selectedColor && (
        <p className="mt-2 text-gray-600">{selectedColor}</p>
      )}
    </div>
  
              </div>


              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <button className='border border-gray-300 rounded py-2'>
                    <button onClick={decreaseQuantity} className=" border-none px-2">-</button>
                    <span className="px-4">{quantity}</span>
                    <button onClick={increaseQuantity} className=" border-none px-2">+</button>
                  </button>
                </div>
                <button onClick={handleAddToCart} className="bg-white text-black px-6 py-2 border-2 border-gray-800 rounded hover:bg-gray-400">Add To Cart</button>
                <button className="bg-white text-gray-800 px-6 py-2 rounded border-2 border-gray-800 hover:bg-gray-400">Compare</button>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-600">SKU: SS001</span>
                <span className="text-gray-600">Category: Sofas</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-600">Tags:</span>
                <div className="flex space-x-2">
                  <span className="text-gray-800 border px-2 py-1 rounded">Sofa</span>
                  <span className="text-gray-800 border px-2 py-1 rounded">Chair</span>
                  <span className="text-gray-800 border px-2 py-1 rounded">Home</span>
                  <span className="text-gray-800 border px-2 py-1 rounded">Shop</span>
                </div>
              </div>
              <div className="flex space-x-2 gap-4 mb-10">
              <span className="text-gray-600">Share:</span>
    <a href="#" className="text-black hover:text-gray-800">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" className="text-black hover:text-gray-800">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="#" className="text-black hover:text-gray-800">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
</div>
            </div>
          </div>
        </div>
      </div>
      <Cartpage2/>
      <Cartpage3 />
    </div>
  );
}

export default Cartpage;
