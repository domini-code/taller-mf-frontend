import React from 'react';

const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
  return (
    <div className='w-full max-w-md p-5 mx-auto bg-white rounded-lg shadow-md'>
      <h2 className='mb-5 text-2xl font-bold'>Summary</h2>
      {cart.map((item, index) => (
        <div key={index} className='flex justify-between mb-4'>
          <div>
            <h3 className='text-lg'>{item.product.title.slice(0, 10)}</h3>
            <p className='text-sm text-gray-500'>Quantity: {item.count}</p>
          </div>
          <p className='text-lg'>${item.product.price * item.count}</p>
        </div>
      ))}
      <hr className='my-5' />
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold'>Total</h2>
        <p className='text-xl'>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSummary;
