import React from "react";
import vidioBack from '/public/vedio/vid1.mp4';
import './Carta.css';
import ModalCart from "./ModalCart/ModalCart";


function Carta() {
  return (
    <>
    <div className="carta-parent">
      <div className="carta-child1">
        <h1 className="text-4xl py-8">We are waiting for a team of famous chefs.</h1>
        <p className="leading-7 text-xl">
          Chefs must be leaders, you must have the strength to lead your
          team, and you must work harmoniously with the team.
        </p>
        <button className='rounded-xl bg-inherit border-2 py-2 px-2.5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring text-white my-8 w-40 btnTeam' onClick={()=>document.getElementById('my_modal_1').showModal()} >Create your team</button>
      </div>
      <div className="carta-child2">
        <video autoPlay muted preload="1" loop className="w-screen rounded-3xl" src={vidioBack}></video>
      </div>
    </div>
    <ModalCart/>
    </>
  );
}

export default Carta;
