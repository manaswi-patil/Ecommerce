import React from 'react'
import image1 from './../../../src/assets/image 1.png';
import image2 from './../../../src/assets/image 2.png';
import image3 from './../../../src/assets/image 3.png';
import image4 from './../../../src/assets/image 4.png';
import Footer from './../../components/Belowboxes/Footer';
const Cartpage3 = () => {
    return (
        <div className="container mx-auto px-4  h-1/2 overflow-hidden bg-white-400 pl-20 pr-20">

            <h1 className="text-3xl font-bold text-center mb-8">Related Products</h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image1)}>
                    <img
                        src={image1}
                        alt="Product 1"
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                    <h3 className="text-xl font-semibold mb-2">Syltherine</h3>
                    <p className="text-gray-500 mb-1">Stylish cafe chair</p>
                    <p className="text-gray-900 font-bold">Rp 2.500.000</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image2)}>
                    <img
                        src={image2}
                        alt="Product 2"
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                    <h3 className="text-xl font-semibold mb-2">Leviosa</h3>
                    <p className="text-gray-500 mb-1">Stylish cafe chair</p>
                    <p className="text-gray-900 font-bold">Rp 2.500.000</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image3)}>
                    <img
                        src={image3}
                        alt="Product 3"
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                    <h3 className="text-xl font-semibold mb-2">Lolito</h3>
                    <p className="text-gray-500 mb-1">Luxury big sofa</p>
                    <p className="text-gray-900 font-bold">Rp 7.000.000</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image4)}>
                    <img
                        src={image4}
                        alt="Product 4"
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                    <h3 className="text-xl font-semibold mb-2">Respira</h3>
                    <p className="text-gray-500 mb-1">Outdoor bar table and stool</p>
                    <p className="text-gray-900 font-bold">Rp 500.000</p>
                </div>

            </div>
            <button className='text-yellow-500 hover:text-gray-400  font-bold border-yellow-500 border-2 px-20  py-2 mx-auto block mt-10 mb-20'>Show More</button>
            <Footer /> 
        </div>

    )
}

export default Cartpage3
