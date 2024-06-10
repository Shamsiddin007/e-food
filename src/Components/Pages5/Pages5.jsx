import React from "react";
import qrKey from "/public/img/qrkey.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Page5.css'
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Pages() {

  


  return (
    <div className="contact_div ">
    
        <div className="rounded-2xl w-96 bg-base-100 shadow-xl qrPar">
          <figure>
            <img src={qrKey} alt="QR key" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Comment on Telegram leave a comment or ask a question.
            </h2>
            <a href="https://t.me/samadovic_7" target="blank">
              samadovic_7
            </a>
          </div>
        </div>

        <h1 className="text-2xl pt-6 h1">A single contact center</h1>
        <p className="pt-3">+998712005400</p>
   
{/* 
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

export default Pages;
