
import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './../Belowboxes/GalleryItem';
import box1 from './../../../src/assets/Rectangle 36.png';
import box2 from './../../../src/assets/Rectangle 43.png';
import box3 from './../../../src/assets/Rectangle 38.png';
import box4 from './../../../src/assets/Rectangle 39.png';
import box5 from './../../../src/assets/Rectangle 37.png';
import box6 from './../../../src/assets/Rectangle 44.png';
import box7 from './../../../src/assets/Rectangle 45.png';
import box8 from './../../../src/assets/Rectangle 39.png';
import box9 from './../../../src/assets/Rectangle 37.png';

const images = [
    { src: box1, className: 'row-span-2' },
    { src: box2, className: 'col-span-2' },
    { src: box3, className: 'row-span-2' },
    { src: box4, className: 'col-span-1' },
    { src: box5, className: 'col-span-1' },
    { src: box6, className: 'col-span-1' },
    { src: box7, className: 'col-span-1' },
    { src: box8, className: 'col-span-1' },
    { src: box9, className: 'col-span-1' },
];

const Box4 = () => {
    return (
        <div className="container mx-auto   pt-20 pb-40 px-4 py-0 bg-white-200">

            <h1 className="text-2xl font-bold text-center text-gray-300 mb-5">Share your setup with</h1>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-Poppins-bold">#FuniroFurniture</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        src={image.src}
                        className={`${image.className} aspect-square md:aspect-auto`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Box4;