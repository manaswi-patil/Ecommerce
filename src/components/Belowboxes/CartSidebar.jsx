// import React from 'react';

// const CartSidebar = ({ isOpen, cartItems, onClose }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
//       <div className="p-4 ">
//         <div className="flex justify-between items-center mt-20 mb-4">
//           <h2 className="text-xl font-bold">Shopping Cart</h2>
//           <button onClick={onClose} className="text-gray-500">&times;</button>
//         </div>
//         {cartItems.map((item, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>{item.quantity} x Rs. {item.price.toFixed(2)}</p>
//             </div>
//           </div>
//         ))}
//         <div className="mt-4">
//           <p className="font-bold">Subtotal: Rs. {subtotal.toFixed(2)}</p>
//         </div>
//         <div className="mt-4 flex justify-between">
//           <button className="bg-gray-200 px-4 py-2 rounded">Cart</button>
//           <button className="bg-gray-200 px-4 py-2 rounded">Checkout</button>
//           <button className="bg-gray-200 px-4 py-2 rounded">Compare</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;

// import React, { useState } from 'react';

// const CartSidebar = ({ cartItems }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="relative">
//       {/* <button 
//         onClick={() => setIsOpen(!isOpen)} 
//         className="flex items-center"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//         <span className="ml-2">{cartItems.length}</span>
//       </button> */}
      
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10">
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//             {cartItems.map((item, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p>{item.quantity} x Rs. {item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-4">
//               <p className="font-bold">Subtotal: Rs. {subtotal.toFixed(2)}</p>
//             </div>
//             <div className="mt-4 flex justify-between">
//               <button className="bg-gray-200 px-4 py-2 rounded">Cart</button>
//               <button className="bg-gray-200 px-4 py-2 rounded">Checkout</button>
//               <button className="bg-gray-200 px-4 py-2 rounded">Compare</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartSidebar;










import React from 'react';

const CartSidebar = ({ isOpen, cartItems, onClose }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4 ">
        <div className="flex justify-between items-center mt-20 mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.quantity} x Rs. {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <p className="font-bold">Subtotal: Rs. {subtotal.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-200 px-4 py-2 rounded">Cart</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Checkout</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Compare</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
