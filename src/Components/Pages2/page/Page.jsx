import React from "react";
import { Fragment, useEffect, useState } from "react";

import { useCart } from "react-use-cart";
import "./Page.css";
import { products } from "./../../constants/index";
import { Link } from "react-router-dom";


function Page() {
  const [datas, setDatas] = useState([]);

  const { addItem, } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("/db.json");
      const resData = await request.json();
      console.log(resData.articles);
      setDatas(resData.articles);
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="borderparent">
      {products.map((p) => (
        <div className="aksiyagerBorder" key={p.id} >
          <Link to={`/iteminfo/${p.id}`}><img className="AksiyagerImg" src={p.img} alt={p.name} /></Link>
       
          <div className="aksiyaBorder-child">
            <h3 className="aksiyachild-h3">{p.name}</h3>
            <section className="borderFlex">
              <h4 className="borderFlex-h3">{p.price}$</h4>
              <button className="CartBtn" onClick={() => addItem(p)}>
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    class="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p class="text">Add to Cart</p>
              </button>
            </section>
          </div>
         
        </div>
      ))}
    </div>
    
    </>
  );
}

export default Page;
