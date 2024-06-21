import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-8 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">Shop</a></li>
              <li><a href="#" className="hover:text-gray-800">About</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-800">Payment Options</a></li>
              <li><a href="#" className="hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy Policies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="flex-grow border-b border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <button className="ml-2 bg-transparent text-black font-semibold hover:text-gray-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-gray-600">
          2023 furino. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;