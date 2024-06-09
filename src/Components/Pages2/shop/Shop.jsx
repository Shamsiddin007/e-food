import React from 'react'
import { CartProvider} from "react-use-cart";
import Cart from './cart/Cart';
// import Page from './page/Page';
import { Outlet } from 'react-router-dom';


function Shop() {
  return (
    <>
    <CartProvider>
      {/* <Page /> */}
      <Cart />
    </CartProvider>
    </>
  );
}

export default Shop
