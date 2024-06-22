import { useState } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';
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
                            <img src={logotop} className="w-5 h-5  ml-20 mr-4" alt="Logo" />
                            <div className="text-xl font-bold ">Funiro</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="/Home" className="px-4">Home</a>
                            <a href="/Shop" className="px-4">Shop</a>
                            <a href="/About" className="px-4">About</a>
                            <a href="/Contact" className="px-4">Contact</a>
                        </div>
                        <div className=" flex items-right pr-4 gap-3">
                            <a href ="#user"><img src={user} className="w-5 h-5 mr-4" /></a>
                            <a href="#search"> <img src={search} className="w-5 h-5 mr-4" /></a>
                            <a href="#heart"><img src={heart} className="w-5 h-5 mr-4" /></a>
                            <a href="#trally"><img src={trally} className="w-5 h-5 mr-4" /></a>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    );
}

export default Navbar;



