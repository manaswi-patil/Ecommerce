import React from 'react';

const CartDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2>Added to Cart: {product.name}</h2>
        <p>Price: {product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartDetails;