import React from 'react';

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center h-screen px-4 text-center text-white bg-gradient-to-r from-purple-600 to-blue-600'>
      <div>
        <h1 className='mb-4 text-5xl font-bold md:text-7xl'>Bienvenido a Nuestro Sitio Web!</h1>
        <p className='text-xl md:text-2xl'>Estamos contentos de que estés aquí.</p>
      </div>
    </div>
  );
};

export default HeroSection;
