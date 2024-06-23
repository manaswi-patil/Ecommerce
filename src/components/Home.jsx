import React from 'react'
import firstimg from './../../src/assets/firstimg.png';
import Box1 from './Belowboxes/Box1';
import Box2 from './Belowboxes/Box2';
import Box3 from './Belowboxes/Box3';
import Box4 from './Belowboxes/Box4';
import Footer from './Belowboxes/Footer';
const Home = () => {
    return (
        <div>
            <div >
                <img src={firstimg} className='w-full' />
                <div className="absolute top-40 right-20 bottom-0  bg-yellow-50 p-4" style={{ height: '63vh', width: '43vw' }}>
                    <div className="p-4">
                        <div className="text-gray-800 text-left pt-5 text-base font-semibold leading-6 tracking-wider font-Poppins">New Arrival</div><br />
                        <span className='text-[#B88E2F] text-left mt-8 text-7xl font-extrabold leading-8 font-Poppins '>Discuss Our <br /><br /> New Collection</span>
                        <p className="text-gray-800 text-left pt-5 font-Poppins font-semibold leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam officia, incidunt ipsa eligendi sequi!</p>
                        <button className='bg-[#B88E2F] text-white font-bold py-6 px-20 mt-10 text-base leading-6'>Buy Now</button>
                    </div>

                </div>
            </div>
            <Box1 />
            <Box2 />

            <Box3 />
            <Box4 />
            <Footer />
        </div>

    )
}

export default Home