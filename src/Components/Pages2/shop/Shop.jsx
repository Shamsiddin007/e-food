import React from 'react'
import { CartProvider} from "react-use-cart";
import Cart from './cart/Cart';


function Shop() {
  return (
    <>
    <CartProvider>
      <Cart />
    </CartProvider>
    </>
  );
}

export default Shop
