import React from "react";
import { useParams } from "react-router-dom";
import "./Iteminfo.css";
import { useCart } from "react-use-cart";
import "./Iteminfo.css"

const Iteminfo = ({ products }) => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Topilmadi</h1>;
  }

  return (
    // <div>
    //   <img src={product.img} alt="" />
    //   <h1>{product.name}</h1>
    //   <p>{product.title}</p>
    //   <p>Price: ${product.price}</p>
    //   <button className="btn btn-ghost" onClick={() => addItem(product)}>Buy</button>
    // </div>
    
    <div className=" w-96 glass rounded-2xl my-8 idCard">
      <figure>
        <img src={product.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.title}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => addItem(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Iteminfo;
