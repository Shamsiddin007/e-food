import React from "react";
import { useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();  

  const products = [
    {
      id: 1,
      name: "Gamburger",
      title: "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
      price: 25000,
      img: "/public/img/gamburger.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Chizburger",
      title: "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
      price: 28000,
      img: "/public/img/chizburger.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Bigburger",
      title: "Burger bulochkasi, tuzlangan bodring, pomidor, 2 ta go'...",
      price: 40000,
      img: "/public/img/bigburger.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Hot Dog",
      title: "Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...",
      price: 12000,
      img: "/public/img/hotdog.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Chiz dog",
      title: "Hot-dog bulochkasi, kanada sosiskasi, tuzlangan bodri...",
      price: 15000,
      img: "/public/img/chizdog.png",
      quantity: 1,
    },
    {
      id: 6,
      name: "Longer",
      title: "Hot-dog bulochka,ketchup, mayonez, strips 1 dona, tuzl...",
      price: 15000,
      img: "/public/img/longer.png",
      quantity: 1,
    },
    {
      id: 7,
      name: "German Donar",
      title: "Non, ranch sousi, qizil karam salati, Doner go'shti, ay...",
      price: 30000,
      img: "/public/img/germandonar.png",
      quantity: 1,
    },
    {
      id: 8,
      name: "Shaurma",
      title: "Donor bulochka, mol go'shti-donar, yangi bodring, pomid...",
      price: 28000,
      img: "/public/img/shaurma.png",
      quantity: 1,
    },
    {
      id: 9,
      name: "Moxito",
      title: "",
      price: 15000,
      img: "/public/img/moxito.png",
      quantity: 1,
    },
    {
      id: 10,
      name: "Sharbat Dena",
      title: "",
      price: 5000,
      img: "/public/img/sharbatdena.png",
      quantity: 1,
    },
    {
      id: 11,
      name: "Fuse tea",
      title: "",
      price: 10000,
      img: "/public/img/fusetea.png",
      quantity: 1,
    },
    {
      id: 12,
      name: "Bonaqua",
      title: "",
      price: 5000,
      img: "/public/img/suv.png",
      quantity: 1,
    },
  ];
  

  return (
    <div className="borderparent grid grid-cols-3 gap-8">
      {products.map((p) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={p.id}>
          <figure className="overflow-hidden">
            <img className="hover:scale-105 pagesImg cursor-pointer" src={p.img} alt={p.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p.name}</h2>
            <p>{p.title}</p>
            <div className="card-actions justify-between items-center">
              <h2>{p.price}$</h2>
              <button className="btn btn-primary" onClick={() => addItem(p)}>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
