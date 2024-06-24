// import React from 'react'



// const Trally = ({ isOpen, cartItems, onClose }) => {
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


// export default Trally




import React from 'react';

const Trally = ({ isOpen, cartItems, onClose }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
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

export default Trally;
