import React from 'react';
import { useCart } from 'react-use-cart';
import './Cart.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  // Umumiy narxni hisoblash
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = calculateTotal().toFixed(2);

  if (isEmpty) return (
    <div className="cart-grid">
      <ul className="cart-ul">
        <h1>Cart (0)</h1>
        <p>Your cart is empty</p>
      </ul>
      <div className="cart-grid-div">
        <h1 className='cart-grid-div-h1'>Umumiy: 0.00$</h1>
      </div>
    </div>
  );
  


  return (
    <>
    <div className="cart-grid">
      <ul className="cart-ul">
        <h1>Mahsulotlaringiz({totalUniqueItems})</h1>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x <img className="cart-img" src={item.img} alt="" />{' '}
            <div>
              <p>Narxi : {(item.price * item.quantity).toFixed(2)}$</p>
              <h3>{item.name}</h3>
            </div>
            <button
              className="item-button1"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity === 1} // Disable the button if quantity is 1 to avoid negative values
            >
              -
            </button>
            <button
              className="item-button2"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="noselect" onClick={() => removeItem(item.id)}>
              <span className="text">Uchirish</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-grid-div">
        <h1 className='cart-grid-div-h1'>Umumiy: {total}$</h1>
        <h1 className='cart-grid-div-h1'>Dastavka:Tekin</h1>
        <button className='cart-grid-div-btn'><Link to="yetkazibberish">Junatish</Link></button>
      </div>
    </div>
    <Outlet/>
    </>
  );
}
