import React, { useEffect, useState } from 'react';
import CartSummary from './components/Cart-summary/CartSummary';
import CartButton from './components/Cart-button/CartButton';

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const shouldRenderSummary = () => isHovering && quantityProduct > 0;

  const updateProductCount = (currentCart, product) => {
    const existingProduct = currentCart.find((item) => item.product.id === product.product.id);

    if (existingProduct) {
      existingProduct.count = product.count;
      return currentCart;
    }

    return [...currentCart, product];
  };

  const calculateProductQuantity = (cart) => {
    return cart.reduce((sum, item) => sum + item.count, 0);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const updatedCart = updateProductCount(currentCart, product);
      const quantityProducts = calculateProductQuantity(updatedCart);

      setQuantityProduct(quantityProducts);

      return updatedCart;
    });
  };

  useEffect(() => {
    function handleEvent(event) {
      addToCart(event.detail.data);
    }

    document.addEventListener('store:addToCart', handleEvent);

    return () => {
      document.removeEventListener('store:addToCart', handleEvent);
    };
  }, []);

  // console.log('isHovering', isHovering);
  return (
    <nav className='bg-gradient-to-r from-blue-500 to-purple-600'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex items-center justify-between flex-1 sm:items-stretch sm:justify-start'>
            <div className='flex items-center flex-shrink-0'>
              <img
                className='block w-auto h-8 lg:hidden'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
              <img
                className='hidden w-auto h-8 lg:block'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md'
                  aria-current='page'
                >
                  Dominizon
                </a>
              </div>
            </div>
          </div>

          <div
            className='flex items-center justify-end sm:mr-6'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CartButton />
            {shouldRenderSummary() && (
              <div className={`absolute z-10 w-60 top-5 ${isHovering ? 'zoomIn' : 'zoomOut'}`}>
                <CartSummary cart={cart} />
              </div>
            )}
            <span className='px-2 font-medium text-white text-md ' aria-current='page'>
              {quantityProduct}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
