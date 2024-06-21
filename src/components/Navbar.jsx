
import React from 'react';
import trally from './../../src/assets/trally.png';
import heart from './../../src/assets/heart.png';
import search from './../../src/assets/search.png';
import user from './../../src/assets/user.png';
import logotop from './../../src/assets/houselogotop.png';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="fixed top-0 left-0 right-0 py-2 bg-white  text-gray-800 z-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={logotop} className="w-5 h-5 mr-4" alt="Logo" />
                            <div className="text-xl font-bold">Funiro</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#" className="px-4">Home</a>
                            <a href="#" className="px-4">Shop</a>
                            <a href="#" className="px-4">About</a>
                            <a href="#" className="px-4">Contact</a>
                        </div>
                        <div className=" flex items-right pr-4 gap-3">
                            <img src={user} className="w-5 h-5 mr-4" />
                            <img src={search} className="w-5 h-5 mr-4" />
                            <img src={heart} className="w-5 h-5 mr-4" />
                            <img src={trally} className="w-5 h-5 mr-4" />
                        </div>
                    </div>
                </nav>

            </div>

        </>
    );
}

export default Navbar;



