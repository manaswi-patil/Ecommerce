import React from 'react';
import image1 from './../../../src/assets/image 1.png';
import image2 from './../../../src/assets/image 2.png';
import image3 from './../../../src/assets/image 3.png';
import image4 from './../../../src/assets/image 4.png';
import image5 from './../../../src/assets/Image 5.png';
import image6 from './../../../src/assets/image 6.png';
import image7 from './../../../src/assets/image 7.png';
import image8 from './../../../src/assets/image 8.png';

const Box2 = () => {
    const handlePopup = (image) => {
        console.log(image);
    };

    return (
        <div className="container mx-auto px-4 py-5 h-1/2 overflow-hidden bg-white-400 pl-20 pr-20">
            <h1 className="text-3xl font-bold text-center mb-8">Our Product</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image1)}>
                        <img
                            src={image1}
                            alt="Product 1"
                            className="w-full h-auto  mb-4 cursor-pointer" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Syltherine</h3>
                            <p className="text-gray-500 mb-1">Stylish cafe chair</p>
                            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image2)}>
                        <img
                            src={image2}
                            alt="Product 2"
                            className="w-full h-auto mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Leviosa</h3>
                            <p className="text-gray-500 mb-1">Stylish cafe chair</p>
                            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image3)}>
                        <img
                            src={image3}
                            alt="Product 3"
                            className="w-full h-auto  mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Lolito</h3>
                            <p className="text-gray-500 mb-1">Luxury big sofa</p>
                            <p className="text-gray-900 font-bold">Rp 7.000.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image4)}>
                        <img
                            src={image4}
                            alt="Product 4"
                            className="w-full h-auto  mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Respira</h3>
                            <p className="text-gray-500 mb-1">Outdoor bar table and stool</p>
                            <p className="text-gray-900 font-bold">Rp 500.000</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image5)}>
                        <img
                            src={image5}
                            alt="Product 5"
                            className="w-full h-auto mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Grifo</h3>
                            <p className="text-gray-500 mb-1">Night lamp</p>
                            <p className="text-gray-900 font-bold">Rp 1.500.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image6)}>
                        <img
                            src={image6}
                            alt="Product 6"
                            className="w-full h-auto mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Muggo</h3>
                            <p className="text-gray-500 mb-1">Small mug</p>
                            <p className="text-gray-900 font-bold">Rp 150.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image7)}>
                        <img
                            src={image7}
                            alt="Product 7"
                            className="w-full h-auto  mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Pingky</h3>
                            <p className="text-gray-500 mb-1">Cute bed set</p>
                            <p className="text-gray-900 font-bold">Rp 7.000.000</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => handlePopup(image8)}>
                        <img
                            src={image8}
                            alt="Product 8"
                            className="w-full h-auto  mb-4 cursor-pointer"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Product 1</h3>
                            <p className="text-gray-500 mb-1">Lorem ipsum dolor sit amet.</p>
                            <p className="text-gray-900 font-bold">$19.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='text-yellow-500 font-bold border-yellow-500 border-2 px-12 py-2 mx-auto block mt-10'>Show More</button>
        </div>
    );
};

export default Box2;