import React from 'react'
import { CartProvider } from 'react-use-cart';
import Page from "./page/Page";



function Pages2() {
  return (
    <>

      <CartProvider>
          <Page/>
      </CartProvider>



    </>
  )
}

export default Pages2