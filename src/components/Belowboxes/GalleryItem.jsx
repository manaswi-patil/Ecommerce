import React from 'react';

const GalleryItem = ({ src, className }) => {
    return (
        <div className={`relative  bg-blue-200 overflow-hidden rounded-lg ${className}`}>
            <img
                src={src}
                alt="Image"
                className="w-screen h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            <div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"
                onClick={() => {

                    console.log('Image clicked');
                }}
            ></div>
        </div>
    );
};

export default GalleryItem;