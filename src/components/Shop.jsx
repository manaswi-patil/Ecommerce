import React from 'react';
import Breadcrumb from './Breadcrumb';
import FilterBar from './FilterBar';
import Shopimgbg from './../../src/assets/Rectangle 1.png';
import Box5 from './Belowboxes/Box5';
import Box6 from './Belowboxes/Box6';
import Footer from './Belowboxes/Footer';
import Cartpage from './Belowboxes/cartpage';
const Shop = () => {
    return (
        //     <div className="container mx-auto px-4">
        //     <div>
        //       <img src={Shopimgbg} className='w-full h-full' />
        //       <h1 className="relative flex justify-center bg-transparent text-black text-4xl font-bold mb-4">
        //         Shop
        //       </h1>
        //       <div>
        //         <Breadcrumb />
        //         <FilterBar />
        //       </div>
        //     </div>
        //   </div>
        //   );
        // };
        <div className="relative w-full h-screen">
            <img src={Shopimgbg} className="w-full h-128 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
                <h1 className="text-black text-4xl font-bold mb-80">Shop
                    <Breadcrumb />
                </h1>
            </div>

            <FilterBar />
            <div className='mt-20'>
                <Box6 />
            </div>
            <Box5 />
            <Cartpage/>
            <div>
            <Footer />
            </div>
        </div>
    );
};
export default Shop;