import React, { useState } from 'react';
import { HiShare, HiRefresh, HiThumbUp } from 'react-icons/hi';
import {useNavigate} from 'react-router-dom'
import image1 from './../../../src/assets/image 1.png';
import image2 from './../../../src/assets/Asgaard sofa 3.png';
import image3 from './../../../src/assets/image 3.png';
import image4 from './../../../src/assets/image 4.png';
import image5 from './../../../src/assets/image 1.png';
import image6 from './../../../src/assets/image 2.png';
import image7 from './../../../src/assets/image 3.png';
import image8 from './../../../src/assets/image 4.png';
import image9 from './../../../src/assets/image 1.png';
import image10 from './../../../src/assets/image 2.png';
import image11 from './../../../src/assets/image 3.png';
import image12 from './../../../src/assets/image 4.png';
import image13 from './../../../src/assets/image 1.png';
import image14 from './../../../src/assets/image 2.png';
import image15 from './../../../src/assets/image 3.png';
import image16 from './../../../src/assets/image 4.png';
const Box6 = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const totalPages = 3;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleAddToCart = () => {
        // const cartPageUrl = '/cartpage'; // Adjust this URL to match your routing configuration
        // window.open(cartPageUrl, '_blank');
        navigate('/cartpage' );
    };

    const allProducts = [
        { image: image1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image2, name: "Asgaard sofa", description: "Stylish sofa", price: "Rp 2.5000.000" },
        { image: image3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image5, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image6, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image7, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image8, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image9, name: "Syltherine 2", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image10, name: "Asgaard sofa 2", description: "Stylish sofa", price: "Rp 2.5000.000" },
        { image: image11, name: "Lolito 2", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image12, name: "Respira 2", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image13, name: "Syltherine 2", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image14, name: "Leviosa 2", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image15, name: "Lolito 2", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image16, name: "Respira 2", description: "Outdoor bar table and stool", price: "Rp 500.000" },
    ];

    const page2Products = [
        { image: image1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image2, name: "Asgaard sofa", description: "Stylish sofa", price: "Rp 2.5000.000" },
        { image: image3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image5, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image6, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image7, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image8, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image9, name: "Syltherine 2", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image10, name: "Asgaard sofa 2", description: "Stylish sofa", price: "Rp 2.5000.000" },
        { image: image11, name: "Lolito 2", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
        { image: image4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        { image: image5, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image6, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
        { image: image7, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
    ];

    const renderProducts = () => {
        if (currentPage === 1) {
            return allProducts;
        } else if (currentPage === 2) {
            return page2Products;
        } else {
            return allProducts;
        }
    };

    return (
        <div className="container mx-auto px-4 h-1/2 overflow-hidden bg-white-400 pl-40 pr-40">
            <div className="grid grid-cols-4 gap-6 mt-0">
                {renderProducts().map((product, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <img
                            src={product.image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                        />
                        {index === 1 && hoveredProduct === index && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white space-y-2">
                                <button className="px-4 py-2 bg-yellow-500 rounded-md " onClick={handleAddToCart} >
 Add to cart</button>

                                <div className="flex space-x-4">
                                    <button
                                        className="px-2 py-1 boreder-none  text-white"
                                        onClick={() => handleShare(product)}
                                    >
                                        <HiShare className="mr-2" /> Share
                                    </button>
                                    <button className="px-2 py-1 boreder-none  text-white ">
                                        <HiRefresh className="mr-2" /> Compare
                                    </button>
                                    <button className="px-2 py-1 boreder-none  text-white">
                                        <HiThumbUp className="mr-2" /> Like
                                    </button>
                                </div>
                            </div>
                        )}
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-500 mb-1">{product.description}</p>
                        <p className="text-gray-900 font-bold">{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-2 mt-8">
                {[1, 2, 3].map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-8 h-8 rounded-md ${currentPage === pageNumber
                            ? 'bg-yellow-600 text-white'
                            : 'bg-[#F9F1E7] text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-2 rounded-md bg-[#F9F1E7] text-gray-700 hover:bg-gray-200"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Box6;


























// const [currentPage, setCurrentPage] = useState(1);
// const [hoveredProduct, setHoveredProduct] = useState(null);
// const [showCartDetails, setShowCartDetails] = useState(false);
// const [showShareDetails, setShowShareDetails] = useState(false);
// const [selectedProduct, setSelectedProduct] = useState(null);
// const totalPages = 3;

// const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
// };

// const handleAddToCart = (product) => {
//     setSelectedProduct(product);
//     setShowCartDetails(true);
// };

// const handleShare = (product) => {
//     setSelectedProduct(product);
//     setShowShareDetails(true);
// };

// const closeDetails = () => {
//     setShowCartDetails(false);
//     setShowShareDetails(false);
//     setSelectedProduct(null);
// };


// const renderProducts = () => {
//     if (currentPage === 1) {
//         return allProducts;
//     } else if (currentPage === 2) {
//         return page2Products;
//     } else {
//         return allProducts;
//     }
// };


{/* <div className="container mx-auto px-4 h-1/2 overflow-hidden bg-white-400 pl-40 pr-40">
                <div className="grid grid-cols-4 gap-6 mt-0">
                    {renderProducts().map((product, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <img
                                src={product.image}
                                alt={`Product ${index + 1}`}
                                className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                            />
                            {hoveredProduct === index && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white space-y-2">
                                    <button
                                        className="px-4 py-2 bg-yellow-500 rounded-md"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to cart
                                    </button>

                                    <div className="flex space-x-4">
                                        <button
                                            className=" border-none  text-white rounded-md"
                                            onClick={() => handleShare(product)}
                                        >
                                            <HiShare className="mr-2" /> Share
                                        </button>
                                        <button className=" border-none  text-white rounded-md">
                                            <HiRefresh className="mr-2" /> Compare
                                        </button>
                                        <button className=" border-none text-white rounded-md">
                                            <HiThumbUp className="mr-2" />Like
                                        </button>
                                    </div>

                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-500 mb-1">{product.description}</p>
                            <p className="text-gray-900 font-bold">{product.price}</p>
                        </div>
                    ))} */}
{/* </div> */ }




{/* {showCartDetails && (
                <CartDetails product={selectedProduct} onClose={closeDetails} />
            )}
            {showShareDetails && (
                <ShareDetails product={selectedProduct} onClose={closeDetails} />
            )} */}
{/* </div> */ }
// 
