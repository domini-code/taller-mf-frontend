import React from 'react';
const CartButton = () => {
  return (
    <button className='p-1 ml-5 text-white rounded-full'>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M3 3h18l-3 9H6l-3-9zm5 13a3 3 0 113-3 3 3 0 01-3 3zm12 0a3 3 0 113-3 3 3 0 01-3 3z'
        ></path>
      </svg>
    </button>
  );
};

export default CartButton;
