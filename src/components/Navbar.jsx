import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logotop from './../../src/assets/houselogotop.png';
import CartSidebar from './Belowboxes/CartSidebar';
import trally from './../../src/assets/trally.png';
import heart from './../../src/assets/heart.png';
import search from './../../src/assets/search.png';
import user from './../../src/assets/user.png';

const Navbar = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 right-0 py-2 bg-white text-gray-900 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logotop} className="w-[50px] h-[32px] ml-20 mr-2" alt="Logo" />
              <div className="text-[32px] font-bold">Furniro</div>
            </div>

            <ul className="flex justify-between p-6 items-center text-base font-medium gap-14">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="flex items-right pr-4 gap-3">
              <Link to="/user"><img src={user} className="w-5 h-5 mr-4" alt="User" /></Link>
              <Link to="/search"> <img src={search} className="w-5 h-5 mr-4" alt="Search" /></Link>
              <Link to="/heart"><img src={heart} className="w-5 h-5 mr-4" alt="Heart" /></Link>
              <button onClick={toggleCart} className="focus:outline-none">
                <img src={trally} className="w-5 h-5 mr-16" alt="Trally" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      {isCartOpen && <CartSidebar isOpen={isCartOpen} cartItems={cartItems} onClose={() => setIsCartOpen(false)} />}
    </>
  );
}

export default Navbar;