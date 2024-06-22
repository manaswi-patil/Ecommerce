import React from 'react';
import filter from './../../src/assets/Vector (4).png'
import vector3 from './../../src/assets/Vector (3).png'
import vector2 from './../../src/assets/Vector (2).png'
const FilterBar = () => {
    return (
        <div className="flex justify-between items-center bg-yellow-50 py-4 border-t border-b pl-40 pr-40">
            <div className="flex  bg-opacity-100 items-center space-x-4">
                <button className="flex items-center space-x-2 px-3 py-2 border-none">
                    <img src={filter} className="w-5 h-5 text-black" />

                    <span className="text-gray-800">Filter</span>
                </button>
                <button className="px-3 py-2 border-none">
                    <img src={vector3} className="w-5 h-5 text-black" />
                </button>
                <button className="px-3 flex py-2 border-right text-gray-400">
                    <img src={vector2} className="w-5 h-5 text-black" />

                </button>
                <span className="text-gray-800">Showing 1-16 of 32 results</span>
            </div>
            <div className="flex items-center space-x-4">
                <span>Show</span>
                <select className="border bg-white rounded px-2 py-1">
                    <option>16</option>
                    <option>32</option>
                    <option>48</option>
                </select>
                <span>Short by</span>
                <select className="border bg-white rounded px-2 py-1">
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;