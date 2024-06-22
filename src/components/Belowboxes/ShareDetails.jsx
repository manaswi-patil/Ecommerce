import React from 'react';

const ShareDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2>Share: {product.name}</h2>
        <p>Description: {product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ShareDetails;