import React from "react";

function Cooking() {
  return (
    <div className=" grid grid-cols-2 gap-10 m-20 ">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className=" w-80 h-full cursor-pointer"
            src="/public/img/thechef1.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chef</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-full cursor-pointer "
            src="/public/img/chef5.avif"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assistant chef</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cooking;
