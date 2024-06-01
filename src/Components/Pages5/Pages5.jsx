import React from "react";
import qrKey from "/public/img/qrkey.png";

function Pages() {
  return (
    <div className="w-4/5 m-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={qrKey} alt="QR key" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Comment on Telegram leave a comment or ask a question.
          </h2>
          <a href="https://t.me/samadovic_7" target="blank">samadovic_7</a>
        </div>
      </div>
          
            <h1 className="text-2xl pt-6">A single contact center</h1>
            <p className="pt-3">+998712005400</p>
          
    </div>
  );
}

export default Pages;
