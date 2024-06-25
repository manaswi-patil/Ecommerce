import React from 'react';
const Shoppingcart = ({ items, subtotal }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <div className="mt-4 font-bold">
        Subtotal: Rs. {subtotal.toFixed(2)}
      </div>
      <div className="mt-4 flex justify-between">
        <ActionButton text="Cart" />
        <ActionButton text="Checkout" />
        <ActionButton text="Comparison" />
      </div>
    </div>
  );
};

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        <span>{item.name}</span>
      </div>
      <div>
        <span>{item.quantity} x Rs. {item.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

const ActionButton = ({ text }) => {
  return (
    <button className="bg-gray-200 px-4 py-2 rounded">
      {text}
    </button>
  );
};

export default Shoppingcart;
